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
  const { linhaId } = route.params;
  const { nomeLinha } = route.params;
  const { cidades } = route.params;
  const { cidadeOrigem } = route.params;
  const { horarioPrevistoOrigem } = route.params;
  const { enderecoOrigem } = route.params;
  const { nomePontoOrigem } = route.params;
  const { cidadeDestino } = route.params;

  const { colors } = useTheme();
  const { user, isAuthenticated, _showAlert } = useAuth();
  const [isFocus1, setIsFocus1] = useState(false);
  const [pontosDestinoData, setPontosDestinoData] = useState([]);
  const [pontoIdDestino, setPontoIdDestino] = useState(null);
  const [enderecoDestino, setEnderecoDestino] = useState(null);
  const [horarioPrevistoDestino, setHorarioPrevistoDestino] = useState(null);
  const [nomePontoDestino, setNomePontoDestino] = useState(null);


  useEffect(() => {
    console.log('-------------- Tela de Configuração5 ----------', nomeLinha, linhaId, cidades, cidadeOrigem, horarioPrevistoOrigem, enderecoOrigem, cidadeDestino)

    api.get('/pontos/' + linhaId + '/' + cidadeDestino)
      .then((response) => {
        console.log('Retorno da api listar pontos:', response.data)
        setPontosDestinoData(response.data)
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

    console.log("continuar:")
    navigation.navigate('Configuracao6Tab', { 
      linhaId: linhaId, 
      nomeLinha: nomeLinha,
      cidades: cidades, 
      cidadeOrigem: cidadeOrigem, 
      nomePontoOrigem: nomePontoOrigem,
      horarioPrevistoOrigem: horarioPrevistoOrigem,
      enderecoOrigem: enderecoOrigem,
      cidadeDestino: cidadeDestino,
      horarioPrevistoDestino: horarioPrevistoDestino,
      enderecoDestino: enderecoDestino,
      nomePontoDestino: nomePontoDestino
    })

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

          {pontoIdDestino != null &&
            <View style={stylesDropdown.titContainer}>
              <Text style={stylesDropdown.titText2}>
                Ponto de desembarque
              </Text>
            </View>
          }


          <Dropdown
            style={[stylesDropdown.dropdown, isFocus1 && { borderColor: 'blue' }]}
            placeholderStyle={stylesDropdown.placeholderStyle}
            selectedTextStyle={stylesDropdown.selectedTextStyle}
            inputSearchStyle={stylesDropdown.inputSearchStyle}
            iconStyle={stylesDropdown.iconStyle}
            data={pontosDestinoData}
            search
            maxHeight={300}
            labelField="nome"
            valueField="id"
            placeholder={!isFocus1 ? 'Selecione o ponto de desembarque' : '...'}
            searchPlaceholder="Search..."
            value={'linha'}
            onFocus={() => setIsFocus1(true)}
            onBlur={() => setIsFocus1(false)}
            onChange={item => {
              setPontoIdDestino(item.id);
              setIsFocus1(false);
              setHorarioPrevistoDestino(item.horaPrevisaoInicio)
              setEnderecoDestino(item.endereco)
              setNomePontoDestino(item.nome)
            }}
          />

          {pontoIdDestino != null &&
            <>
              <BoxInfo
                top={10}
                icon={'map-marker'}
                text1={'Endereço'}
                text2={enderecoDestino}
              />
              <BoxInfo
                top={0}
                icon={'clock-o'}
                text1={'Previsão de horário'}
                text2={horarioPrevistoDestino}
              />
            </>
          }

          <Button
            text={'Continuar'}
            onClick={continua}
            top={45}
            value={'id'}
            flag={pontoIdDestino}
          />

        </Animatable.View>
      </ScrollView>

    </View>



  );
};

export default ConfiguracaoScreen;