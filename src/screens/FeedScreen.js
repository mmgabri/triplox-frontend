import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, StatusBar, } from 'react-native'; import * as Animatable from 'react-native-animatable';
import { useTheme } from 'react-native-paper';
import { useAuth } from '../contexts/auth';
import { decodeMessage } from '../services/decodeMessage'

const FeedScreen = ({ navigation }) => {
  const [load, setLoad] = useState(true)
  const { colors } = useTheme();
  const { user, isAuthenticated, _showAlert } = useAuth();

  useEffect(() => {

    navigation.addListener('focus', () => setLoad(!load))

    console.log("user:", isAuthenticated)

    if (!isAuthenticated) {
      console.log('usuario não logado')
      _showAlert('info', 'Ooops!', decodeMessage(401), 4000);
      navigation.navigate('SignInTab')
    }

    console.log('usuario logado')


  }, [load, navigation])

  return (

    <View style={styles.container}>
      <StatusBar backgroundColor='#993399' barStyle="light-content" />
      <Animatable.View
        animation="fadeInUpBig"
        style={[styles.footer, {
          backgroundColor: colors.background
        }]}
      >
        <Text style={[styles.text_footer, {
          color: colors.text
        }]}>Tela Feed em construção</Text>
        <View style={styles.action}>
        </View>

      </Animatable.View>
    </View>
  );

};

export default FeedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#993399'
  },

  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5
  },
});
