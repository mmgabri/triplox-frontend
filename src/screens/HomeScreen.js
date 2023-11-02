import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, StatusBar } from "react-native";
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

    <View style={styles.container}>
      <StatusBar backgroundColor='#009387' barStyle="light-content" />
      <Animatable.View
        animation="fadeInUpBig"
        style={[stylesCommon.footer, {
          backgroundColor: colors.background
        }]}
      >
        <Text>Em construção</Text>
      </Animatable.View>
      
      

    </View>

  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F8',
    margin: -10
  },
});