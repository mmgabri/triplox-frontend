import React, { useState, useEffect, } from 'react';
import { SafeAreaView, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import CheckinListaPresencaItem from './CheckinListaPresencaItem';
import stylesCommon from '../../components/stylesCommon'
import { decodeMessage } from '../../services/decodeMessage'
import { api } from '../../services/api';
import { View } from 'react-native-animatable';
import { useAuth } from '../../contexts/auth';
0
const CheckinListaPresencaScreen = ({ route, navigation }) => {
  const { data } = route.params;
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [checkinsData, setCheckinsData] = useState([]);
  const [load, setLoad] = useState(true)
  const {_showAlert, signOut } = useAuth();

  useEffect(() => {

    console.log('---------->>>>>>>>> Tela CheckinListaPresencaScreen <<<<<<<<<<<<<<-------------', data)

    getCheckins()


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

  const getCheckins = () => {
    api.get('/checkins/list/data-linha-sentido?data=' + data.dataCheckin + '&linha=' + data.linhaId + '&sentido=' + data.sentido)
      .then((response) => {
        console.log('Retorno da api onClickCheckinsRealizados:', response.data)
        setCheckinsData(response.data)
        setIsRefreshing(false)
      })
      .catch((error) => {
        setIsRefreshing(false)
        console.error('Erro na apionClickCheckinsRealizados:', error)
        const statusCode = error.response?.status
        _onError(statusCode);
      });
  }


  const onRefresh = () => {
    console.log('------------------------onRefresh')
    setIsRefreshing(true)
    getCheckins()
  }

  return (
    <SafeAreaView style={stylesCommon.safe}>


      <View backgroundColor="whitesmoke">
        <View style={styles.InfBox2}>
          <TouchableOpacity style={styles.icon}>
            <Icon name={"bus"} size={18} color="#696969" marginTop={-8} />
          </TouchableOpacity>
          <View>
            <Text style={styles.label}>
              {data.nomeLinha}
            </Text>
          </View>
        </View>

        <View style={styles.InfBox2}>
          <TouchableOpacity style={styles.icon}>
            <Icon name={"calendar"} size={18} color="#696969" marginTop={-8} />
          </TouchableOpacity>
          <View>
            <Text style={styles.label}>
              {data.dataCheckin}
            </Text>
          </View>
        </View>

        <View style={styles.InfBox2}>
          <TouchableOpacity style={styles.icon}>
            <Icon name={"exchange"} size={18} color="#696969" marginTop={-8} />
          </TouchableOpacity>
          <Text style={styles.label}>
            {data.cidadeOrigem}
          </Text>
          <TouchableOpacity style={styles.icon_cidades} >
            <Icon name="arrow-circle-right" marginBottom={3} top={12}  marginLeft={0} marginRight={-9} size={20} color="gray" />
          </TouchableOpacity>

          <Text style={styles.label}>
            {data.cidadeDestino}
          </Text>
        </View>
        <Text style={styles.text}>
          Lista de Presença:</Text>
      </View>

      <CheckinListaPresencaItem
        checkinsData={checkinsData}
        onRefresh={onRefresh}
        isRefreshing={isRefreshing}
      />

    </SafeAreaView>

  );

};

export default CheckinListaPresencaScreen;

const styles = StyleSheet.create({
  container: {
    flex: 0,
    borderRadius: 5,
    height: -200,
    marginRight: 2,
    marginLeft: 2,
    marginRight: 2,
    marginBottom: 7,
    marginTop: 7,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
    backgroundColor: 'white',
    borderColor: "#DCDCDC"
  },
  label: {
    marginLeft: 5,
    marginTop: 9,
    marginBottom: 5,
    fontSize: 14,
    color: 'gray',
    fontWeight: "600"

  },

  icon_cidades: {
    marginTop: -3,
    marginBottom: 0,
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

  InfBox2: {
    flexDirection: 'row',
    marginBottom: 5,
    backgroundColor: "white",
    height: 40,

  },

  icon: {
    marginTop: 18,
    marginLeft: 10,
    marginRight: 10,
  },
});
