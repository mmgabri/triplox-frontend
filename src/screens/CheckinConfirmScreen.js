import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, StatusBar, ScrollView } from 'react-native'; import * as Animatable from 'react-native-animatable';
//import { View, Text, StatusBar, ScrollView , StyleSheet} from 'react-native';
import stylesCommon from '../components/stylesCommon'
import Button from '../components/Button';
import ButtonTransparent from '../components/ButtonTransparent';
import ButtonRealizarCheckin from '../components/ButtonRealizarCheckin';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { useTheme } from 'react-native-paper';
import { useAuth } from '../contexts/auth';
import { decodeMessage } from '../services/decodeMessage'
import { api } from '../services/api';
import CheckinPessoas from './CheckinPessoas'


const CheckinSentidoScreen = ({ route, navigation }) => {
  const { checkin } = route.params;
  const [checkins, setCheckins] = useState([]);
  const [sentido, setSentido] = useState({});
  const [refreshing, setRefreshing] = useState(false);
  const [load, setLoad] = useState(true)
  const { colors } = useTheme();
  const { user, isAuthenticated, _showAlert } = useAuth();

  useEffect(() => {
    console.log('======================= Entrou na tela Checkin - Confirm ==========================', checkin)

    navigation.addListener('focus', () => setLoad(!load))

    getCheckins();

  }, [load, navigation])

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    getCheckins();
  }, []);


  async function getCheckins() {
    console.log('getCheckins;')
    //  setIsLoading(true)

    api.get('/checkins/list/bydatalinhasentido/' + checkin.data + '/' + checkin.linhaId + '/' + checkin.sentido)
      .then((response) => {
        console.info("api executada com sucesso", response.data)
        setCheckins(response.data)
        //        setIsLoading(false);
      })
      .catch((error) => {
        //      setIsLoading(false);
        console.error('Erro na chamada da api:', error)
        onError(error)
      });
  }



  function onError(error) {
    console.log("onError")
    const statusCode = error.response?.status;

    if (statusCode == 401) {
      _showAlert('info', 'Ooops!', decodeMessage(statusCode), 4000);
      navigation.navigate('SignInTab')
    }
    _showAlert('danger', 'Ooops!', decodeMessage(statusCode), 7000);
  }

  function onClickVerListaPresenca (){
    console.log('Ver lista pessoas - onClickVerListaPresenca')
  }

  function onClick() {
    console.log('onClick - Fazer checkin')

    let obj = {
      userId: checkin.userId,
      data: checkin.data,
      linhaId: checkin.linhaId,
      sentido: checkin.sentido
    }

    console.log('Objeto>', obj)

    api.post('/checkins/create', obj)
      .then((response) => {
        console.info("api executada com sucesso", response.data)

      })
    console.log('Checkin:', checkin)
    //   navigation.navigate('Chat', { chat: item, routeChats: true })
  }


  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#009387' barStyle="light-content" />
      <CheckinPessoas
        checkin={checkin}
        checkins={checkins}
        onClickVerListaPresenca={onClickVerListaPresenca}
        onClick={onClick}
        onRefresh={onRefresh}
        refreshing={refreshing}>
      </CheckinPessoas>



    </View>


  );

};

export default CheckinSentidoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DCDCDC'
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
