import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, StatusBar, SafeAreaView, TouchableOpacity } from 'react-native';
import AwesomeLoading from 'react-native-awesome-loading';
import { useTheme } from 'react-native-paper';
import { useAuth } from '../../contexts/auth';
import { decodeMessage } from '../../services/decodeMessage'
import Icon from 'react-native-vector-icons/FontAwesome'
import stylesCommon from '../../components/stylesCommon'
import { api } from '../../services/api';
import FeedItem from './FeedItem';

const FeedScreen = ({ navigation }) => {
  const [load, setLoad] = useState(true)
  const [feedsData, setFeedsData] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false)
  const { colors } = useTheme();
  const { _showAlert, signOut} = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    navigation.addListener('focus', () => setLoad(!load))
    console.log('--- Feed Screen ---')

    getFeeds();

  }, [load, navigation])


  function _onError(error) {
    console.log('_onError: ', error)

    if (error == 401) {
      signOut()
      _showAlert('warning', 'Ooops!', decodeMessage(error), 7000);
      navigation.navigate('SignInTab')
    } else {
      _showAlert('danger', 'Ooops!', decodeMessage(error), 7000);
    }

  }

  const getFeeds = () => {

    setIsLoading(true)

    api.get('/feeds')
      .then((response) => {
        setIsLoading(false)
        console.log('Retorno da api list feeds', response.data)
        setFeedsData(response.data)
        setIsRefreshing(false)
      })
      .catch((error) => {
        setIsLoading(false)
        setIsRefreshing(false)
        console.error('Erro na list feeds:', error)
        const statusCode = error.response?.status
        _onError(statusCode);
      });
  }

  const onClickNew = () => {
    console.log('--- New Feed ---')

     navigation.navigate('NewFeedTab')

  };

  const onClickDelete = (id) => {
    console.log('--- Delete Feed ---')

    setIsLoading(true)

    api.delete('/feeds/' + id)
      .then((response) => {
        setIsLoading(false)
        console.log('Retorno da api delete feed', response.data)
        getFeeds()
      })
      .catch((error) => {
        setIsLoading(false)
        console.error('Erro na api delete api:', error)
        const statusCode = error.response?.status
        _onError(statusCode);
      });
  };


  const onRefresh = () => {
    console.log('------------------------onRefresh')
    setIsRefreshing(true)
    getFeeds()
  }


  return (

    isLoading ?
    < View style={{ alignItems: "center"}}>
      <AwesomeLoading indicatorId={8} size={50} isActive={true} text="" />
    </View >

    :

    <SafeAreaView style={stylesCommon.safe}>
      <View backgroundColor="white">
        <StatusBar backgroundColor='#993399' barStyle="light-content" />
        <View style={styles.container}>
          <TouchableOpacity style={styles.icon} onPress={() => { onClickNew() }}>
            <View style={{ alignItems: "center", flexDirection: "row" }}>
              <Icon name={"send"} size={22} color="#993399" marginTop={-8} />
              <Text style={styles.label}>
                Postar algo ?
              </Text>
            </View>

          </TouchableOpacity>
          <View>
          </View>
        </View>

      </View>

      <FeedItem
        feedsData={feedsData}
        onRefresh={onRefresh}
        isRefreshing={isRefreshing}
        onClickDelete={onClickDelete}
      />

    </SafeAreaView>
  );

};

export default FeedScreen;

const styles = StyleSheet.create({

  label: {
    marginLeft: 8,
    marginTop: -7,
    fontSize: 16,
    color: 'gray',
    fontWeight: "bold"
  },

  icon: {
    marginTop: 13,
    marginLeft: 10,
    marginRight: 10,
  },

  text: {
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 0,
    fontSize: 15,
    color: 'gray',
    fontWeight: "bold"

  },

  container: {
    flexDirection: 'row',
    marginBottom: 10,
    marginTop: 15,
    backgroundColor: "white",
    height: 40,
  },

});
