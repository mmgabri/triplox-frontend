import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, StatusBar, ScrollView } from 'react-native'; import * as Animatable from 'react-native-animatable';
//import { View, Text, StatusBar, ScrollView , StyleSheet} from 'react-native';
import stylesCommon from '../components/stylesCommon'
import Button from '../components/Button';
import ButtonTransparent from '../components/ButtonTransparent';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { useTheme } from 'react-native-paper';
import { useAuth } from '../contexts/auth';
import { decodeMessage } from '../services/decodeMessage'
import { api } from '../services/api';


const CheckinSentidoScreen = ({ route, navigation }) => {
  const { checkin } = route.params;
  const [selected, setSelected] = useState('');
  const [checkin2, setCheckin] = useState({});
  const [sentido, setSentido] = useState({});
  const [load, setLoad] = useState(true)
  const { colors } = useTheme();
  const { user, isAuthenticated, _showAlert } = useAuth();

  useEffect(() => {
    console.log('--- Entrou na tela Checkin - Sentido ---', checkin)

    navigation.addListener('focus', () => setLoad(!load))

    api.get('/linhas/' + checkin.linhaId)
      .then((response) => {
        console.info("api executada com sucesso", response.data)
        let checkin2 = ({
          data: checkin.data,
          linhaId: checkin.linhaId,
          userId: checkin.userId,
          cidadeOrigem: response.data.cidadeOrigem,
          cidadeDestino: response.data.cidadeDestino,
          nome: response.data.nome
        })

        setCheckin(checkin2)

        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.error('Erro na chamada da api:', error)
        onError(error)
      });


  }, [load, navigation])

  function onError(error) {
    console.log("onError")
    const statusCode = error.response?.status;

    if (statusCode == 401) {
      _showAlert('info', 'Ooops!', decodeMessage(statusCode), 4000);
      navigation.navigate('SignInTab')
    }
    _showAlert('danger', 'Ooops!', decodeMessage(statusCode), 7000);
  }

  const salvar = async () => {
    
    let obj = {
      userId: checkin2.userId,
      data: checkin2.data,
      linhaId: checkin2.linhaId,
      sentido: sentido
    }

    console.log('Objeto>' , obj)

    api.post('/checkins/create' , obj )
    .then((response) => {
      console.info("api executada com sucesso", response.data)
     
      })
    console.log('Checkin:', checkin)
    setCheckin(checkin)
    //navigation.navigate('SetupTipo', { linha: linha, })

  }

  function setar (value ) {

    setSentido(value)
    
    console.log('Confirmar Sentido:>', sentido)
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
        }]}>Escolho o Sentido</Text>

        <Text style={[stylesCommon.text_footer, {
          color: colors.text
        }]}>  {checkin2.nome}  </Text>

        <ButtonTransparent
          text={checkin2.cidadeOrigem + ' --> ' + checkin2.cidadeDestino}
          onClick={setar}
          top={30}
          value='IDA'
        />
        <ButtonTransparent
          text={checkin2.cidadeDestino + ' --> ' + checkin2.cidadeOrigem}
          onClick={setar}
          top={30}
          value='VOLTA'
        />

        <Button
          text={'Confirmar'}
          onClick={salvar}
          top={40}
        />

      </Animatable.View>
    </View>


  );

};

export default CheckinSentidoScreen;

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
