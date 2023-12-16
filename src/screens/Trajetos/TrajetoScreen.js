import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import { useTheme } from 'react-native-paper';
import { useAuth } from '../../contexts/auth';
import { decodeMessage } from '../../services/decodeMessage'
import { api } from '../../services/api';
import TrajetoItems from './TrajetoItems';
import Button2 from '../../components/Button';
import stylesCommon from '../../components/stylesCommon'



const TrajetoScreen = ({ route, navigation }) => {
  const [isRefreshing, setIsRefreshing] = useState(false)
  const { colors } = useTheme();
  const { user, isAuthenticated, _showAlert } = useAuth();
  const [trajetosData, setTrajetosData] = useState({});
  const [load, setLoad] = useState(true)


  useEffect(() => {
    console.log('--------------Tela de configuração - Trajetos----------')
    navigation.addListener('focus', () => setLoad(!load))

    if (!isAuthenticated) {
      _showAlert('info', 'Ooops!', decodeMessage(401), 4000);
      navigation.navigate('SignInTab')
    }

    getTrajetos()


  }, [load, navigation])

  function _onError(error) {
    console.log('_onError: ', error)

    if (error == 401) {
      signOut()
      _showAlert('warning', 'Ooops!', decodeMessage(error), 4000);
      navigation.navigate('SignInTab')
    } else {
      _showAlert('danger', 'Ooops!', decodeMessage(error), 7000);
    }
  }

  const getTrajetos = () => {

    console.log('trajetos...')

    api.get('/trajetos/list/user?user=' + user.id)
      .then((response) => {
        console.log('Retorno da api listar trajetos:', response.data)
        setIsRefreshing(false)
        setTrajetosData(response.data)
        if (response.data.length == 0) {
          navigation.navigate('CriarTrajeto0Tab')
        }
      })
      .catch((error) => {
        //setIsLoading(false)
        setIsRefreshing(false)
        console.error('Erro na api listar trajetos:', error)
        const statusCode = error.response?.status
        _onError(statusCode)
      });

  };

  const onClickNew = () => {
    console.log('cadastrarTrajeto...')
    navigation.navigate('CriarTrajeto1Tab')

  };

  function onClickDelete(id) {
    console.log('onClickDelete ==>', id)

    api.delete('/trajetos/?id=' + id + '&user=' + user.id)
      .then((response) => {
        console.log('Retorno da api delete trajeto:', response.data)
        _showAlert('success', "Obaa", 'O trajeto foi excluido !', 3000);
        getTrajetos()
        setIsRefreshing(false)
      })
      .catch((error) => {
        //      setIsLoading(false)
        setIsRefreshing(false)
        console.error('Erro na api delete trajeto:', error)
        const statusCode = error.response?.status
        _onError(statusCode)
      });

  }

  const onRefresh = () => {
    console.log('------------------------onRefresh')
    setIsRefreshing(true)
    getTrajetos()
  }

  return (

    <TrajetoItems
      trajetosData={trajetosData}
      onClickDelete={onClickDelete}
      onClickNew={onClickNew}
      onRefresh={onRefresh}
      isRefreshing={isRefreshing}
    />



  );

};

export default TrajetoScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    flexDirection: "column",
    alignItems: "end"
  },

  container2: {
    backgroundColor: "white",
    flexDirection: "row"

  },

  container3: {
    flexDirection: "row"

  },
  container4: {
    height: 100,
    backgroundColor: "blue",
    flexDirection: "column",
    alignSelf: "center",
    marginBottom: ""


  },

  container5: {
    position: "absolute"




  },



  container_button: {
    backgroundColor: "blue",
    alignSelf: "center",
    marginBottom: 0

  },


  footer: {
    flex: 3,
    margin: 7
  },

  button_styte: {
    width: '100%',
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },

  button_text: {
    fontSize: 18,
    alignSelf: "center",
    fontWeight: 'bold'
  },

});
