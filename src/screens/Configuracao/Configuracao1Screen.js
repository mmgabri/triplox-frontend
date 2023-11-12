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



const ConfiguracaoScreen = ({ navigation }) => {
  const { colors } = useTheme();
  const {isAuthenticated, _showAlert } = useAuth();
  const [isFocus1, setIsFocus1] = useState(false);
  const [linhasData, setLinhasData] = useState([]);
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
    console.log('--------------Tela de configuração----------')
    if (!isAuthenticated) {
      console.log('usuario não logado')
      _showAlert('info', 'Ooops!', decodeMessage(401), 4000);
      navigation.navigate('SignInTab')
    }

    api.get('/linhas')
      .then((response) => {
        console.log('Retorno da api listar linhas:', response.data)
        setLinhasData(response.data)
      })
      .catch((error) => {
        setIsLoading(false)
        console.error('Erro na api listar linhas:', error)
        const statusCode = error.response?.status
        _showAlert('danger', 'Ooops!', decodeMessage(statusCode), 5000);
      });


  }, []);

  const continua = () => {
    console.log("===> continua:")

    data1 = data

    var count = Object.keys(data.cidades).length;
    let cidadesArray = [];
    for (var i = 0; i < count; i++) {
      cidadesArray.push({
        value: data.cidades[i],
        label: data.cidades[i],
      });
    }
    data1.cidades = cidadesArray

    navigation.navigate('Configuracao2Tab', { data1 })

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

          {data.linhaId != null &&
            <View style={stylesDropdown.titContainer}>
              <Text style={stylesDropdown.titText2}>
                Linha
              </Text>
            </View>
          }


          <Dropdown
            style={[stylesDropdown.dropdown, isFocus1 && { borderColor: 'blue' }]}
            placeholderStyle={stylesDropdown.placeholderStyle}
            selectedTextStyle={stylesDropdown.selectedTextStyle}
            inputSearchStyle={stylesDropdown.inputSearchStyle}
            iconStyle={stylesDropdown.iconStyle}
            data={linhasData}
            search
            maxHeight={300}
            labelField="nome"
            valueField="id"
            placeholder={!isFocus1 ? 'Selecione a linha' : '...'}
            searchPlaceholder="Search..."
            value={'linha'}
            onFocus={() => setIsFocus1(true)}
            onBlur={() => setIsFocus1(false)}
            onChange={item => {
              setData({...data,linhaId: item.id, nomeLinha: item.nome, cidades: item.cidades});
              setIsFocus1(false);
            }}
          />

          <Button
            text={'Próximo passo'}
            onClick={continua}
            top={45}
            value={'id'}
            flag={data.linhaId}
          />

        </Animatable.View>
      </ScrollView>

    </View>



  );
};

export default ConfiguracaoScreen;
