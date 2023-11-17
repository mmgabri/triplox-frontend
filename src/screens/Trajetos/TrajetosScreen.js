import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, FlatList, StatusBar } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useTheme } from 'react-native-paper';
import { useAuth } from '../../contexts/auth';
import { decodeMessage } from '../../services/decodeMessage'
import { api } from '../../services/api';
import { Header } from './HeaderTrajetos'
import { SeparatorItem } from './SeparatorItemTrajetos';
import { TrajetoItem } from './TrajetoItem';
import Button from '../../components/Button';



const TrajetosScreen = ({ route, navigation }) => {
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

  const getTrajetos = () => {

    console.log('trajetos...')

    api.get('/trajetos/user/' + user.id)
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
        _showAlert('danger', 'Ooops!', decodeMessage(statusCode), 5000);
      });

  };

  const cadastrarTrajeto = () => {
    console.log('cadastrarTrajeto...')
    navigation.navigate('CriarTrajeto1Tab')

  };

  function onClickDelete(id) {
    console.log('onClickDelete ==>', id)

    api.delete('/trajetos/user/' + user.id + '/id/' + id)
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
        _showAlert('danger', 'Ooops!', decodeMessage(statusCode), 5000);
      });

  }

  function renderItem({ item }) {
    return <TrajetoItem {...item} onClick={onClickDelete} />;
  }

  const onRefresh = () => {
    console.log('------------------------onRefresh')
    setIsRefreshing(true)
    getTrajetos()
  }

  return (
    <View style={styles.container}>
        <StatusBar backgroundColor='#009387' barStyle="light-content" />
        <Animatable.View
          animation="fadeInUpBig"
          style={[styles.footer, {
            backgroundColor: colors.background
          }]}
        >

        <FlatList
          ListHeaderComponent={Header(trajetosData.nomeLinha)}
          ItemSeparatorComponent={SeparatorItem}
          data={trajetosData}
          keyExtractor={(item) => item.name}
          renderItem={renderItem}
          onRefresh={onRefresh}
          refreshing={isRefreshing}

        />

        <Button
          text={'Cadastrar Trajeto'}
          onClick={cadastrarTrajeto}
          top={50}
          value={'id'}
          flag={"enabled"}
        />
      </Animatable.View >

    </View>
  );

};

export default TrajetosScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  footer: {
    flex: 3,
    margin: 7
},

});
