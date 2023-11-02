import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, StatusBar, } from 'react-native'; import * as Animatable from 'react-native-animatable';
import { useTheme } from 'react-native-paper';
import { useAuth } from '../contexts/auth';
import { decodeMessage } from '../services/decodeMessage'
import { api } from '../services/api';
import stylesCommon from '../components/stylesCommon'
import ButtonTransparent from '../components/ButtonTransparent';


const SetUpScreen = ({ navigation }) => {
  const [load, setLoad] = useState(true)
  const [linha, setLinha] = useState({});
  const { colors } = useTheme();
  const { user, isAuthenticated, _showAlert } = useAuth();

  useEffect(() => {

    console.log('--Tela Setup --')
    navigation.addListener('focus', () => setLoad(!load))

    console.log("user:", isAuthenticated)

    if (!isAuthenticated) {
      console.log('usuario não logado')
      _showAlert('info', 'Ooops!', decodeMessage(401), 4000);
      navigation.navigate('SignInTab')
    }

    console.log('Obtem Linhas')

    api.get('/linhas')
      .then((response) => {
        console.log('Retorno da api listar linhas:', response.data[0].id)
        let responseLinha = ({
          id: response.data[0].id,
          nome: response.data[0].nome,
          cidadeOrigem: response.data[0].cidadeOrigem,
          cidadeDestino: response.data[0].cidadeDestino,
        })


        console.log(responseLinha.id)
        setLinha(responseLinha)
      })
      .catch((error) => {
        setIsLoading(false)
        console.error('Erro na api listar linhas:', error)
        const statusCode = error.response?.status
        _showAlert('danger', 'Ooops!', decodeMessage(statusCode), 5000);
      });

  }, [load, navigation])

  const continuar = (val) => {
    console.log("continuar:", val)
    navigation.navigate('SetupTipo', { linha: linha, })
  }


return (

  <View style={stylesCommon.container}>
    <StatusBar backgroundColor='#009387' barStyle="light-content" />
    <Animatable.View
      animation="fadeInUpBig"
      style={[stylesCommon.footer, {
        backgroundColor: colors.background
      }]}
    >

      <Text style={[stylesCommon.text_footer, {
        color: colors.text
      }]}>Escolha a Linha</Text>

      <ButtonTransparent
        text={linha.nome}
        onClick={continuar}
        top={30}
        value={linha.id}
      />

    </Animatable.View>
  </View>
);

};

export default SetUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009387'
  },

  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5
  },
});
