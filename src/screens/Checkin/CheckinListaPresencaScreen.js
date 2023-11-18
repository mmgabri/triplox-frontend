import React, { useState, useEffect } from 'react';
import {SafeAreaView, } from 'react-native';
import CheckinListaPresencaItem from './CheckinListaPresencaItem';
import stylesCommon from '../../components/stylesCommon'
import { decodeMessage } from '../../services/decodeMessage'
import { api } from '../../services/api';
0
const CheckinListaPresencaScreen = ({ route, navigation }) => {
  const { linhaId } = route.params;
  const { sentido } = route.params;
  const { data } = route.params;
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [checkinsData, setCheckinsData] = useState([]);
  const [load, setLoad] = useState(true)

  useEffect(() => {
    console.log('---------- Tela CheckinListaPresencaScreen -------------', linhaId, sentido, data)

    getCheckins()


  }, [load, navigation])


  const getCheckins = () => {
    api.get('/checkins/data/' + data + '/linha/' + linhaId + '/sentido/' + sentido)
      .then((response) => {
        console.log('Retorno da api onClickCheckinsRealizados:', response.data)
        setCheckinsData(response.data)
        setIsRefreshing(false)
      })
      .catch((error) => {
        setIsRefreshing(false)
        console.error('Erro na apionClickCheckinsRealizados:', error)
        const statusCode = error.response?.status
        _showAlert('danger', 'Ooops!', decodeMessage(statusCode), 5000);
      });
  }


  const onRefresh = () => {
    console.log('------------------------onRefresh')
    setIsRefreshing(true)
    getCheckins()
  }

  return (
    <SafeAreaView style={stylesCommon.safe}>

      <CheckinListaPresencaItem
        checkinsData={checkinsData}
        onRefresh={onRefresh}
        isRefreshing={isRefreshing}
      />

    </SafeAreaView>

  );

};

export default CheckinListaPresencaScreen;