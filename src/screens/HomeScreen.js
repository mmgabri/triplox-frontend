import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, StatusBar, ScrollView, Image } from "react-native";
import * as Animatable from 'react-native-animatable';
import { useTheme } from 'react-native-paper';
import stylesCommon from '../components/stylesCommon'
import { useAuth } from '../contexts/auth';

const HomeScreen = ({ navigation }) => {

  const { colors } = useTheme();

  useEffect(() => {
    console.log("Entrou em HomeScreen")

  }, [])

  //  const onRefresh = useCallback(() => {
  //    console.log('entrou onRefresh **********')
  //    setRefreshing(true);
  //    getAnuncios();
  //  }, []);



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
          <Image
              style={styles.image}
              source={require('../assets/images/bus0.jpg')}
            />
            <Text style={styles.titText}>
              Excelencia em transporte de passageiro
            </Text>
            <Text style={styles.titText}>
              Qualidade de atendimento, conforto e segurança para você!
            </Text>
            <Text style={styles.titText}>
              Motoristas com muita experiência e treinados para um bom atendimento ao cliente.
            </Text>
            <Text style={styles.titText}>
              Fretado para São Paulo nas regiões do metrô Barra Funda e metrô Sumaré
            </Text>
            <Image
              style={styles.image}
              source={require('../assets/images/bus1.png')}
            />
            <Text style={styles.titText}>
            Escolher o serviço de fretado para ir ao trabalho ou faculdade é uma escolha inteligente para quem deseja economizar tempo, aumentar sua segurança e conforto, preservar o meio ambiente e reduzir o estresse relacionado à viagem!
            </Text>
            <Text style={styles.titText}>
            Nós oferecemos comodidade,  pois não é necessário se preocupar com horários, rotas ou filas como no transporte público. Temos maior segurança, especialmente à noite ou em horários menos movimentados. Com nossos serviços você economiza de tempo, já que viajar de fretado é muito mais rápido do que viajar de transporte público, pois o motorista pode escolher rotas mais rápidas e evitar trânsito.
            </Text>
            <Text style={styles.titText}>
            Solicite um orçamento pelo nosso telefone ou entre em contato através de mensagem de texto pelo whatsapp!
            </Text>
            <Text style={styles.titText}>
            Estamos ansiosos para formamos essa parceria e te oferecer a melhor opção de transporte para São Paulo e região! 
            </Text>
            <Text style={styles.titText}>
            Tabela com os horários de check in ou check out através do nosso whatsapp!
            </Text>
            <Image
              style={styles.image}
              source={require('../assets/images/contato.png')}
            />

          </View>

        </Animatable.View>
      </ScrollView>

    </View>

  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F8',
    margin: -10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    marginTop: -90,
    marginBottom: -90,
    width: 350,
    height: 350,
    alignContent: 'center',
    resizeMode: 'contain', // ou 'cover', 'stretch', etc.
  },
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