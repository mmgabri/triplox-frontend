import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, StatusBar, ScrollView } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useTheme } from 'react-native-paper';
import stylesCommon from '../../components/stylesCommon'
import Button from '../../components/Button';

const CriarTrajeto0Screen = ({ navigation }) => {
  const { colors } = useTheme();

  
  useEffect(() => {
    console.log('--------------Tela de configuração - taela zero----------')

  }, []);

  const continua = () => {
    console.log("===> continua:")

    console.log("continuar:")
    navigation.navigate('CriarTrajeto1Tab', { })
    
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
          <View style={styles.titContainer}>
            <Text style={styles.titText}>
              Você  ainda não possui trajetos cadastrados para realizar Check-in. 
            </Text>
            <Text style={styles.titText}>
              Cadastre para agilizar seus Check-ins!
            </Text>
          </View>
          <Button
            text={'Adicionar Trajeto'}
            onClick={continua}
            top={50}
            value={'id'}
            flag={"enabled"}
          />

        </Animatable.View>
      </ScrollView>

    </View>

  );
};

export default CriarTrajeto0Screen;

const styles = StyleSheet.create({
  titContainer: {
    marginTop: 0,
    marginBottom: 1

  },
  titText: {
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 5,
    fontSize: 18,
    color: 'gray'

  },


  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 20,
    paddingBottom: 3000
    
},
});