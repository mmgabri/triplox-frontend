import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, StatusBar, ScrollView } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useTheme } from 'react-native-paper';
import { Dropdown } from 'react-native-element-dropdown';
import { useAuth } from '../../contexts/auth';
import stylesCommon from '../../components/stylesCommon'
import stylesDropdown from '../../components/stylesDropdown'
import Button from '../../components/Button';

const ConfiguracaoScreen = ({ route, navigation }) => {
  const { linhaId } = route.params;
  const { nomeLinha } = route.params;
  const { cidades } = route.params;
  const { cidadeOrigem } = route.params;
  const { horarioPrevistoOrigem } = route.params;
  const { enderecoOrigem } = route.params;
  const { nomePontoOrigem } = route.params;

  const { colors } = useTheme();
  const { user, isAuthenticated, _showAlert } = useAuth();
  const [isFocus1, setIsFocus1] = useState(false);
  const [cidadesData, setCidadesData] = useState([]);
  const [cidadeDestino, setCidadeDestino] = useState(null);



  useEffect(() => {
    console.log('-------------- Tela de Configuração4 ----------', nomeLinha, linhaId, cidades,cidadeOrigem, horarioPrevistoOrigem,  enderecoOrigem)

    setCidadesData(cidades)


  }, []);

  const continua = () => {
    console.log("===> continua:")

    console.log("continuar:")
    navigation.navigate('Configuracao5Tab', 
    { linhaId: linhaId, 
      nomeLinha: nomeLinha,
      cidades: cidades, 
      cidadeOrigem: cidadeOrigem,
      horarioPrevistoOrigem: horarioPrevistoOrigem, 
      enderecoOrigem: enderecoOrigem, 
      nomePontoOrigem: nomePontoOrigem,
      cidadeDestino: cidadeDestino})
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

          {cidadeDestino != null &&
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
            iconStyle={stylesDropdown.iconStyle}
            data={cidadesData}
            search
            maxHeight={300}
            labelField="label"
            valueField="field"
            placeholder={!isFocus1 ? 'Selecione a cidade destino' : '...'}
            searchPlaceholder="Search..."
            value={'linha'}
            onFocus={() => setIsFocus1(true)}
            onBlur={() => setIsFocus1(false)}
            onChange={item => {
              setCidadeDestino(item.value);
              setIsFocus1(false);
            }}
          />

          <Button
            text={'Continuar'}
            onClick={continua}
            top={45}
            value={'id'}
            flag={cidadeDestino}
          />

        </Animatable.View>
      </ScrollView>

    </View>



  );
};

export default ConfiguracaoScreen;
