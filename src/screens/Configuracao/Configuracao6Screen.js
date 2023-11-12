import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, StatusBar, ScrollView } from 'react-native';
import * as Animatable from 'react-native-animatable';
import AwesomeLoading from 'react-native-awesome-loading';
import { useTheme } from 'react-native-paper';
import { useAuth } from '../../contexts/auth';
import { decodeMessage } from '../../services/decodeMessage'
import { api } from '../../services/api';
import stylesCommon from '../../components/stylesCommon'
import Button from '../../components/Button';
import BoxInfo from '../../components/BoxInfo';


const ConfiguracaoScreen = ({ route, navigation }) => {
  const { colors } = useTheme();
  const { user, _showAlert } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const { data5 } = route.params;

  const [data, setData] = useState({
    linhaId: null,
    nomeLinha: null,
    cidades: [],
    pontoIdOrigem: null,
    cidadeOrigem: null,
    nomePontoOrigem: null,
    horarioPrevistoEmbarquePontoOrigem: null,
    enderecoOrigem: null,
    pontoIdDestino: null,
    enderecoDestino: null,
    nomePontoDestino: null,
    cidadeDestino: null,
  });

  useEffect(() => {
    console.log('-------------- Tela de Configuração6 ----------', data5)

    setData(data5)

  }, []);

  const salvar = () => {
    console.log("===> salvar")

    const obj = {
      userId: user.id,
      linhaId: data.linhaId,
      pontoIdOrigem: data.pontoIdOrigem,
      pontoIdDestino: data.pontoIdDestino
    }

    setIsLoading(true)
    api.post('/trajetos', obj)
      .then((response) => {
        setIsLoading(false)
        console.log('Retorno da api listar pontos:', response.data)
        _showAlert('success', "Obaa", 'Configurações salvas!', 3000);
        navigation.navigate('Configuracao0Tab')
      })
      .catch((error) => {
        setIsLoading(false)
        console.error('Erro na api create trajeto:', error)
        onError(error)
      });

  };

  function onError(error) {
    console.log("onError")
    const statusCode = error.response?.status;

    if (statusCode == 401) {
      _showAlert('info', 'Ooops!', decodeMessage(statusCode), 4000);
      navigation.navigate('SignInTab')
    }
    _showAlert('danger', 'Ooops!', decodeMessage(statusCode), 7000);
  }


  return (

    isLoading ?
      < View >
        <AwesomeLoading indicatorId={8} size={50} isActive={true} text="" />
      </View >

      :

      <View style={stylesCommon.container}>
        <StatusBar backgroundColor='#009387' barStyle="light-content" />
        <ScrollView>
          <Animatable.View
            animation="fadeInUpBig"
            style={[stylesCommon.footer_cust, {
              backgroundColor: colors.background
            }]}
          >

            <BoxInfo
              top={5}
              icon={'bus'}
              text1={'Linha'}
              text2={data.nomeLinha}
            />

            <BoxInfo
              top={7}
              icon={'building'}
              text1={'Cidade Origem'}
              text2={data.cidadeOrigem}
            />

            <BoxInfo
              top={7}
              icon={'map-marker'}
              text1={'Ponto de embarque'}
              text2={data.nomePontoOrigem}
              text3={data.enderecoOrigem}
            />
            <BoxInfo
              top={7}
              icon={'building'}
              text1={'Cidade Destino'}
              text2={data.cidadeDestino}
            />

            <BoxInfo
              top={7}
              icon={'map-marker'}
              text1={'Ponto de desembarque'}
              text2={data.nomePontoDestino}
              text3={data.enderecoDestino}
            />

            <Button
              text={'Salvar Trajeto'}
              onClick={salvar}
              top={20}
              value={'id'}
              flag={"enabled"}
            />

          </Animatable.View>
        </ScrollView>

      </View>
  )
}

export default ConfiguracaoScreen;