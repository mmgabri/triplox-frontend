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
  const [cidades, setCidades] = useState([]);
  const [linhasData, setLinhasData] = useState([]);
  const [linhaId, setLinhaId] = useState(null);
  const [nomeLinha, setNomeLinha] = useState(null);


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

    var count = Object.keys(cidades).length;
    let cidadesArray = [];
    for (var i = 0; i < count; i++) {
      cidadesArray.push({
        value: cidades[i],
        label: cidades[i],
      });
    }

    navigation.navigate('Configuracao2Tab', { linhaId: linhaId, cidades: cidadesArray, nomeLinha: nomeLinha })

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

          {linhaId != null &&
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
              setLinhaId(item.id);
              setNomeLinha(item.nome);
              setCidades(item.cidades)
              setIsFocus1(false);
            }}
          />

          <Button
            text={'Próximo passo'}
            onClick={continua}
            top={45}
            value={'id'}
            flag={linhaId}
          />

        </Animatable.View>
      </ScrollView>

    </View>



  );
};

export default ConfiguracaoScreen;
