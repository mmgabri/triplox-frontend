import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, StatusBar, } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useTheme } from 'react-native-paper';
import { useAuth } from '../contexts/auth';
import { decodeMessage } from '../services/decodeMessage'
import { api } from '../services/api';
import stylesCommon from '../components/stylesCommon'
import ButtonTransparent from '../components/ButtonTransparent';
import { Dropdown } from 'react-native-element-dropdown';


const ConfiguracaoScreen = ({ navigation }) => {
  const { colors } = useTheme();
  const { user, isAuthenticated, _showAlert } = useAuth();
  const [isFocus, setIsFocus] = useState(false);
  const [linhaId, setLinhaId] = useState(null);
  const [nomeLinha, setNomeLinha] = useState(null);
  const [cidade, setCidade] = useState(null);
  const [cidades, setCidades] = useState([]);
  const [linhas, setLinhas] = useState([]);
  const [pontos, setPontos] = useState([]);
  const [pontoId, setPontoId] = useState(null);
  const [endereco, setEndereco] = useState(null);
  const [horaPrevisaoInicio, setHoraPrevisaoInicio] = useState(null);


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
        setLinhas(response.data)
      })
      .catch((error) => {
        setIsLoading(false)
        console.error('Erro na api listar linhas:', error)
        const statusCode = error.response?.status
        _showAlert('danger', 'Ooops!', decodeMessage(statusCode), 5000);
      });


  }, []);

  const handleCidades = (cidades) => {
    console.log("===> handleCidades")
    var count = Object.keys(cidades).length;

    let cidadesArray = [];
    for (var i = 0; i < count; i++) {
      console.log(cidades[i])
      cidadesArray.push({
        value: cidades[i],
        label: cidades[i],
      });
    }
    setCidades(cidadesArray);

  };

  const handlePontos = (cidade) => {
    console.log("===> handlePontos:", cidade)
    console.log("linhaId:", linhaId)

    api.get('/pontos/' +  linhaId  + '/' +  cidade )
      .then((response) => {
        console.log('Retorno da api listar pontos:', response.data)
        setPontos(response.data)
      })
      .catch((error) => {
   //     setIsLoading(false)
        console.error('Erro na api listar pontos:', error)
        const statusCode = error.response?.status
        _showAlert('danger', 'Ooops!', decodeMessage(statusCode), 5000);
      });



  };


  const execute = () => {

  };

  return (

    <View style={stylesCommon.container}>
      <StatusBar backgroundColor='#009387' barStyle="light-content" />
      <Animatable.View
        animation="fadeInUpBig"
        style={[stylesCommon.footer, {
          backgroundColor: colors.background
        }]}
      >
        <View><Text></Text></View>
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={linhas}
          search
          maxHeight={300}
          labelField="nome"
          valueField="id"
          placeholder={!isFocus ? 'Selecione a linha' : '...'}
          searchPlaceholder="Search..."
          value={'linha'}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setLinhaId(item.id);
            handleCidades(item.cidades);
            setNomeLinha(item.nome);
            setIsFocus(false);
          }}
        />

        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={cidades}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Selecione a cidade' : '...'}
          searchPlaceholder="Search..."
          value={'cidade'}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setCidade(item.value)
            handlePontos(item.value);
            setIsFocus(false);
          }}
        />

        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={pontos}
          search
          maxHeight={300}
          labelField="nome"
          valueField="id"
          placeholder={!isFocus ? 'Selecione o ponto' : '...'}
          searchPlaceholder="Search..."
          value={'ponto'}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setPontoId(item.id)
            setHoraPrevisaoInicio(item.horaPrevisaoFim)
            setEndereco(item.endereco)
            setIsFocus(false);
          }}
        />

        {pontoId != null  &&
        
          <View>
            <Text>{endereco}</Text>
            <Text>{horaPrevisaoInicio}</Text>
          </View>
        }

        <ButtonTransparent
          text={'xxxxxx'}
          onClick={execute}
          top={30}
          value={'id'}
        />

      </Animatable.View>
    </View>



  );
};

export default ConfiguracaoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#533483',
    padding: 16,
    justifyContent: 'center',
    alignContent: 'center',
  },
  dropdown: {
    height: 50,
    borderColor: '#A9A9A9',
    borderWidth: 0.8,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 4,
    marginRight: 4,
  },
  icon: {
    marginRight: 15,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});