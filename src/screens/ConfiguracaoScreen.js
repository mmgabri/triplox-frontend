import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, StatusBar, ScrollView } from 'react-native';
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
  const [isFocus1, setIsFocus1] = useState(false);
  const [isFocus2, setIsFocus2] = useState(false);
  const [isFocus3, setIsFocus3] = useState(false);
  const [isFocus4, setIsFocus4] = useState(false);
  const [isFocus5, setIsFocus5] = useState(false);
  const [cidadesData, setCidadesData] = useState([]);
  const [linhasData, setLinhasData] = useState([]);
  const [pontosOrigemData, setPontosOrigemData] = useState([]);
  const [pontosDestinoData, setPontosDestinoData] = useState([]);
  const [cidadeOrigem, setCidadeOrigem] = useState(null);
  const [cidadeDestino, setCidadeDestino] = useState(null);
  const [linhaId, setLinhaId] = useState(null);
  const [pontoIdOrigem, setPontoIdOrigem] = useState(null);
  const [pontoIdDestino, setPontoIdDestino] = useState(null);
  const [enderecoOrigem, setEnderecoOrigem] = useState(null);
  const [enderecoDestino, setEnderecoDestino] = useState(null);
  const [horarioPrevistoOrigem, setHorarioPrevistoOrigem] = useState(null);
  const [horarioPrevistoDestino, setHorarioPrevistoDestino] = useState(null);


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

  const handleLinhas = () => {
    console.log("===> handleLinhas")
    setCidadesData(null)
    setPontosDestinoData(null)
    setPontosOrigemData(null)
  };


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
    setCidadesData(cidadesArray);

  };

  const handlePontosOrigem = (cidade) => {
    console.log("===> handlePontosOrigem:", cidade)
    console.log("linhaId:", linhaId)

    api.get('/pontos/' + linhaId + '/' + cidade)
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
  };

  const handlePontosDestino = (cidade) => {
    console.log("===> handlePontosDestino:", cidade)
    console.log("linhaId:", linhaId)

    api.get('/pontos/' + linhaId + '/' + cidade)
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
  };


  const execute = () => {

  };

  return (

    <View style={stylesCommon.container}>
      <StatusBar backgroundColor='#009387' barStyle="light-content" />
      <ScrollView>
        <Animatable.View
          animation="fadeInUpBig"
          style={[stylesCommon.footer, {
            backgroundColor: colors.background
          }]}
        >
          <View style={styles.titContainer}>
            <Text style={styles.titText2}>
              Linha
            </Text>
          </View>
          <Dropdown
            style={[styles.dropdown, isFocus1 && { borderColor: 'blue' }]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
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
              handleCidades(item.cidades);
              setIsFocus1(false);
            }}
          />

          <View style={styles.titContainer}>
            <Text style={styles.titText}>
              Cidade origem
            </Text>
          </View>


          <Dropdown
            style={[styles.dropdown, isFocus2 && { borderColor: 'blue' }]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={cidadesData}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus2 ? 'Selecione a cidade origem' : '...'}
            searchPlaceholder="Search..."
            value={'cidade'}
            onFocus={() => setIsFocus2(true)}
            onBlur={() => setIsFocus2(false)}
            onChange={item => {
              setCidadeOrigem(item.value)
              handlePontosOrigem(item.value);
              setIsFocus2(false);
            }}
          />
          <View style={styles.titContainer}>
            <Text style={styles.titText}>
              Ponto Origem
            </Text>
          </View>

          <Dropdown
            style={[styles.dropdown, isFocus3 && { borderColor: 'blue' }]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={pontosOrigemData}
            search
            maxHeight={300}
            labelField="nome"
            valueField="id"
            placeholder={!isFocus3 ? 'Selecione o ponto de origem' : '...'}
            searchPlaceholder="Search..."
            value={'ponto'}
            onFocus={() => setIsFocus3(true)}
            onBlur={() => setIsFocus3(false)}
            onChange={item => {
              setPontoIdOrigem(item.id)
              setHorarioPrevistoOrigem(item.horaPrevisaoInicio)
              setEnderecoOrigem(item.endereco)
              setIsFocus3(false);
            }}
          />

          {pontoIdOrigem != null &&
            <View>
              <Text>{enderecoOrigem}</Text>
              <Text>{horarioPrevistoOrigem}</Text>
            </View>
          }


          <View style={styles.titContainer}>
            <Text style={styles.titText}>
              Cidade Destino
            </Text>
          </View>


          <Dropdown
            style={[styles.dropdown, isFocus4 && { borderColor: 'blue' }]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={cidadesData}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus4 ? 'Selecione a cidade destino' : '...'}
            searchPlaceholder="Search..."
            value={'cidade'}
            onFocus={() => setIsFocus4(true)}
            onBlur={() => setIsFocus4(false)}
            onChange={item => {
              setCidadeDestino(item.value)
              handlePontosDestino(item.value);
              setIsFocus4(false);
            }}
          />
          <View>
            <Text>
              Ponto Destino
            </Text>
          </View>

          <Dropdown
            style={[styles.dropdown, isFocus5 && { borderColor: 'blue' }]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={pontosDestinoData}
            search
            maxHeight={300}
            labelField="nome"
            valueField="id"
            placeholder={!isFocus5 ? 'Selecione o ponto de destino' : '...'}
            searchPlaceholder="Search..."
            value={'ponto'}
            onFocus={() => setIsFocus5(true)}
            onBlur={() => setIsFocus5(false)}
            onChange={item => {
              setPontoIdDestino(item.id)
              setHorarioPrevistoDestino(item.horaPrevisaoInicio)
              setEnderecoDestino(item.endereco)
              setIsFocus5(false);
            }}
          />

          {pontoIdDestino != null &&
            <View>
              <Text>{enderecoDestino}</Text>
              <Text>{horarioPrevistoDestino}</Text>
            </View>
          }

          <ButtonTransparent
            text={'xxxxxx'}
            onClick={execute}
            top={30}
            value={'id'}
          />

        </Animatable.View>
      </ScrollView>

    </View>



  );
};

export default ConfiguracaoScreen;

const styles = StyleSheet.create({
  titContainer: {
    marginTop: 0,
    marginBottom: 1

  },
  titText: {
    marginLeft: 5,
    marginTop: 10,
    marginBottom: 5,
    fontSize: 14,
    color: '#1C1C1C'

  },
  titText2: {
    marginLeft: 5,
    marginTop: -8,
    marginBottom: 5,
    fontSize: 14,
    color: '#1C1C1C'

  },

  container: {
    flex: 1,
    backgroundColor: '#533483',
    padding: 16,
    justifyContent: 'center',
    alignContent: 'center',
  },

  dropdown: {
    height: 40,
    borderColor: '#A9A9A9',
    borderWidth: 0.8,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginTop: 0,
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