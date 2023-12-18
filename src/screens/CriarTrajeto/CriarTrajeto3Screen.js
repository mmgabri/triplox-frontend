import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, StatusBar, ScrollView } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useTheme } from 'react-native-paper';
import { Dropdown } from 'react-native-element-dropdown';
import stylesCommon from '../../components/stylesCommon'
import stylesDropdown from '../../components/stylesDropdown'
import Button from '../../components/Button';
import { api } from '../../services/api';
import BoxInfo from '../../components/BoxInfo';
import { useAuth } from '../../contexts/auth';

const CriarTrajeto3Screen = ({ route, navigation }) => {
  const {_showAlert, signOut } = useAuth();
  const { colors } = useTheme();
  const [isFocus1, setIsFocus1] = useState(false);
  const [isFocus2, setIsFocus2] = useState(false);
  const [pontosDestinoData, setPontosDestinoData] = useState([]);
  const { data2 } = route.params;

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
    console.log('-------------- Tela de CriarTrajeto3 ----------', data2)

    setData(data2)

  }, []);

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


  const continua = () => {
    console.log("===> continua:")

    data3 = data

    navigation.navigate('CriarTrajeto4Tab', { data3 })
  };


  const handlePontos = (cidade) => {

    api.get('/pontos/list?linha=' + data.linhaId + '&cidade=' + cidade)
      .then((response) => {
        console.log('Retorno da api listar pontos:', response.data)
        setPontosDestinoData(response.data)
      })
      .catch((error) => {
        console.error('Erro na api listar pontos:', error)
        const statusCode = error.response?.status
        _onError(statusCode)
      });
  };


  return (

    <View style={stylesCommon.container}>
      <StatusBar backgroundColor='#993399' barStyle="light-content" />
      <ScrollView>
        <Animatable.View
          animation="fadeInUpBig"
          style={[stylesCommon.footer_cust, {
            backgroundColor: colors.background
          }]}
        >

          {data.cidadeDestino != null &&
            <View style={stylesDropdown.titContainer}>
              <Text style={stylesDropdown.titText2}>
                Cidade Destino
              </Text>
            </View>
          }


          <Dropdown
            style={[stylesDropdown.dropdown, isFocus1 && { borderColor: 'blue' }]}
            placeholderStyle={stylesDropdown.placeholderStyle}
            selectedTextStyle={stylesDropdown.selectedTextStyle}
            inputSearchStyle={stylesDropdown.inputSearchStyle}
            itemContainerStyle={stylesDropdown.itemContainerStyle}
            itemTextStyle={stylesDropdown.itemTextStyle}
            iconStyle={stylesDropdown.iconStyle}
            activeColor={stylesDropdown.activeColor}
            data={data.cidades}
            search
            maxHeight={300}
            labelField="nome"
            valueField="nome"
            placeholder={!isFocus1 ? 'Selecione a cidade destino' : '...'}
            searchPlaceholder="Search..."
            value={'linha'}
            onFocus={() => setIsFocus1(true)}
            onBlur={() => setIsFocus1(false)}
            onChange={item => {
              setData({ ...data, cidadeDestino: item.nome });
              handlePontos(item.nome);
              setIsFocus1(false);
            }}
          />

          {data.pontoIdDestino != null &&
            <View style={stylesDropdown.titContainer}>
              <Text style={stylesDropdown.titText2}>
                Ponto de desembarque
              </Text>
            </View>
          }


          <Dropdown
            style={[stylesDropdown.dropdown, isFocus2 && { borderColor: 'blue' }]}
            placeholderStyle={stylesDropdown.placeholderStyle}
            selectedTextStyle={stylesDropdown.selectedTextStyle}
            inputSearchStyle={stylesDropdown.inputSearchStyle}
            itemContainerStyle={stylesDropdown.itemContainerStyle}
            itemTextStyle={stylesDropdown.itemTextStyle}
            iconStyle={stylesDropdown.iconStyle}
            activeColor={stylesDropdown.activeColor}
            data={pontosDestinoData}
            search
            maxHeight={300}
            labelField="nome"
            valueField="id"
            placeholder={!isFocus2 ? 'Selecione o ponto de desembarque' : '...'}
            searchPlaceholder="Search..."
            value={'linha'}
            onFocus={() => setIsFocus2(true)}
            onBlur={() => setIsFocus2(false)}
            onChange={item => {
              setIsFocus2(false);
              setData({
                ...data,
                pontoIdDestino: item.id,
                nomePontoDestino: item.nome,
                enderecoDestino: item.endereco,
              });
            }}
          />

          {data.pontoIdDestino != null &&
            <>
              <BoxInfo
                top={10}
                icon={'map-marker'}
                text1={'Endereço'}
                text2={data.enderecoDestino}
              />

            </>
          }

          <Button
            text={'Próximo passo'}
            onClick={continua}
            top={45}
            value={'id'}
            flag={data.pontoIdDestino}
          />

        </Animatable.View>
      </ScrollView>

    </View>



  );
};

export default CriarTrajeto3Screen;
