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
  const { nomePontoOrigem } = route.params;
  const { horarioPrevistoOrigem } = route.params;
  const { enderecoOrigem } = route.params;
  const { horarioPrevistoDestino } = route.params;
  const { enderecoDestino } = route.params;
  const { nomePontoDestino } = route.params;
  const { cidadeDestino } = route.params;


  const { colors } = useTheme();
  
  useEffect(() => {
    console.log('-------------- Tela de Configuração6 ----------',nomeLinha, linhaId, cidades, cidadeOrigem, horarioPrevistoOrigem, enderecoOrigem, cidadeDestino, enderecoDestino, horarioPrevistoDestino)


  }, []);

  const salvar = () => {
    console.log("===> salvar")


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

          <BoxInfo
            top={5}
            icon={'bus'}
            text1={'Linha'}
            text2={nomeLinha}
          />

          <BoxInfo
            top={7}
            icon={'building'}
            text1={'Cidade Origem'}
            text2={cidadeOrigem}
          />

          <BoxInfo
            top={7}
            icon={'map-marker'}
            text1={'Ponto de embarque'}
            text2={nomePontoOrigem}
            text3={enderecoOrigem}
          />
          <BoxInfo
            top={7}
            icon={'building'}
            text1={'Cidade Destino'}
            text2={cidadeDestino}
          />

          <BoxInfo
            top={7}
            icon={'map-marker'}
            text1={'Ponto de desembarque'}
            text2={nomePontoDestino}
            text3={enderecoDestino}
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



  );
};

export default ConfiguracaoScreen;