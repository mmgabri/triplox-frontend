import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, StatusBar, } from 'react-native'; import * as Animatable from 'react-native-animatable';
import { useTheme } from 'react-native-paper';
import { useAuth } from '../contexts/auth';
import { decodeMessage } from '../services/decodeMessage'
import { api } from '../services/api';
import stylesCommon from '../components/stylesCommon'
import ButtonTransparent from '../components/ButtonTransparent';


const SetUpTipoScreen = ({ route, navigation }) => {
  const { linha } = route.params;
  const [load, setLoad] = useState(true)
  const { colors } = useTheme();

  useEffect(() => {

    console.log('Entrou na Tela Setup Tipo de usuário', linha)

    navigation.addListener('focus', () => setLoad(!load))
  }, [load, navigation])

  const continuar = (val) => {
    console.log("continuar:", val)
    linha.tipoUser = val
    console.log("Linha:", linha)
    navigation.navigate('SetupConfirm', { linha: linha, })
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
        }]}>Escolho o seu tipo de usuário</Text>

        <ButtonTransparent
          text='Avulso'
          onClick={continuar}
          top={30}
          value='AVULSO'
        />
        <ButtonTransparent
          text='Mensalista'
          onClick={continuar}
          top={30}
          value='MENSALISTA'
        />

      </Animatable.View>
    </View>
  );

};

export default SetUpTipoScreen;

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
