import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, StatusBar, ScrollView } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useTheme } from 'react-native-paper';
import { Dropdown } from 'react-native-element-dropdown';
import stylesCommon from '../../components/stylesCommon'
import stylesDropdown from '../../components/stylesDropdown'
import Button from '../../components/Button';



const ConfiguracaoScreen = ({ route, navigation }) => {
  const { linhaId } = route.params;
  const { cidades } = route.params;
  const { nomeLinha } = route.params;
  const { colors } = useTheme();
  const [isFocus1, setIsFocus1] = useState(false);
  const [cidadesData, setCidadesData] = useState([]);
  const [cidadeOrigem, setCidadeOrigem] = useState(null);


  useEffect(() => {
    console.log('-------------- Tela de Configuração2 ----------', linhaId, cidades, nomeLinha)

    setCidadesData(cidades)

  }, []);

  const continua = () => {
    console.log("===> continua:")

    console.log("continuar:")
    navigation.navigate('Configuracao3Tab', { linhaId: linhaId, cidades: cidades, nomeLinha: nomeLinha, cidadeOrigem: cidadeOrigem })

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

          {cidadeOrigem != null &&
            <View style={stylesDropdown.titContainer}>
              <Text style={stylesDropdown.titText2}>
                Cidade Origem
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
            placeholder={!isFocus1 ? 'Selecione a cidade Origem' : '...'}
            searchPlaceholder="Search..."
            value={'linha'}
            onFocus={() => setIsFocus1(true)}
            onBlur={() => setIsFocus1(false)}
            onChange={item => {
              setCidadeOrigem(item.value);
              setIsFocus1(false);
            }}
          />

          <Button
            text={'Continuar'}
            onClick={continua}
            top={45}
            value={'id'}
            flag={cidadeOrigem}
          />

        </Animatable.View>
      </ScrollView>

    </View>



  );
};

export default ConfiguracaoScreen;
