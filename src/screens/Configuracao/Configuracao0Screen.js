import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, StatusBar, ScrollView } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useTheme } from 'react-native-paper';
import stylesCommon from '../../components/stylesCommon'
import Button from '../../components/Button';

const Configuracao0Screen = ({ navigation }) => {
  const { colors } = useTheme();

  
  useEffect(() => {

  }, []);

  const continua = () => {
    console.log("===> continua:")

    console.log("continuar:")
    navigation.navigate('Configuracao1Tab', { })
    
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
          <View style={styles.titContainer}>
            <Text style={styles.titText}>
              bla bla bla
            </Text>
          </View>
          <Button
            text={'Iniciar'}
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

export default Configuracao0Screen;

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
    color: '#1C1C1C'

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