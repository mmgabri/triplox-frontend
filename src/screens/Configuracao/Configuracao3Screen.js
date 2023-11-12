import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, StatusBar, ScrollView } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useTheme } from 'react-native-paper';
import { Dropdown } from 'react-native-element-dropdown';
import { useAuth } from '../../contexts/auth';
import { decodeMessage } from '../../services/decodeMessage'
import { api } from '../../services/api';
import stylesCommon from '../../components/stylesCommon'
import stylesDropdown from '../../components/stylesDropdown'
import Button from '../../components/Button';
import BoxInfo from '../../components/BoxInfo';


const ConfiguracaoScreen = ({ route, navigation }) => {
  const { colors } = useTheme();
  const {_showAlert } = useAuth();
  const [isFocus1, setIsFocus1] = useState(false);
  const [pontosOrigemData, setPontosOrigemData] = useState([]);
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
    console.log('-------------- Tela de Configuração3 ----------', data2)

    setData(data2)

    api.get('/pontos/' + data2.linhaId + '/' + data2.cidadeOrigem)
      .then((response) => {
        console.log('Retorno da api listar pontos:', response.data)
        setPontosOrigemData(response.data)
      })
      .catch((error) => {
        //     setIsLoading(false)
        console.error('Erro na api listar pontos:', error)
        const statusCode = error.response?.status
        _showAlert('danger', 'Ooops!', decodeMessage(statusCode), 5000);
      });


  }, []);

  const continua = () => {
    console.log("===> continua:")

   data3 = data

    navigation.navigate('Configuracao4Tab', { data3 })
  };



  return (

    <View style={stylesCommon.container}>
      <StatusBar backgroundColor='#009387' barStyle="light-content" />
      <ScrollView>
        <Animatable.View
          animation="fadeInUpBig"
          style={[stylesCommon.footer_cust, {
            backgroundColor: colors.background
          }]}
        >

          {data.pontoIdOrigem != null &&
            <View style={stylesDropdown.titContainer}>
              <Text style={stylesDropdown.titText2}>
                Ponto de embarque
              </Text>
            </View>
          }


          <Dropdown
            style={[stylesDropdown.dropdown, isFocus1 && { borderColor: 'blue' }]}
            placeholderStyle={stylesDropdown.placeholderStyle}
            selectedTextStyle={stylesDropdown.selectedTextStyle}
            inputSearchStyle={stylesDropdown.inputSearchStyle}
            iconStyle={stylesDropdown.iconStyle}
            data={pontosOrigemData}
            search
            maxHeight={300}
            labelField="nome"
            valueField="id"
            placeholder={!isFocus1 ? 'Selecione o ponto de embarque' : '...'}
            searchPlaceholder="Search..."
            value={'linha'}
            onFocus={() => setIsFocus1(true)}
            onBlur={() => setIsFocus1(false)}
            onChange={item => {
              setData({
                ...data,
                pontoIdOrigem: item.id,
                horarioPrevistoEmbarque: item.horarioPrevistoEmbarque,
                nomePontoOrigem: item.nome,
                enderecoOrigem: item.endereco,
                pontoIdOrigem: item.id
              });
              setIsFocus1(false);
            }}
          />

          {data.pontoIdOrigem != null &&
            <>
              <BoxInfo
                top={10}
                icon={'map-marker'}
                text1={'Endereço'}
                text2={data.enderecoOrigem}
              />
              <BoxInfo
                top={0}
                icon={'clock-o'}
                text1={'Previsão de horário'}
                text2={data.horarioPrevistoEmbarque}
              />
            </>
          }

          <Button
            text={'Próximo passo'}
            onClick={continua}
            top={45}
            value={'id'}
            flag={data.pontoIdOrigem}
          />

        </Animatable.View>
      </ScrollView>

    </View>



  );
};

export default ConfiguracaoScreen;