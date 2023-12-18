import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, StatusBar, SafeAreaView, TouchableOpacity } from 'react-native'; 
import * as Animatable from 'react-native-animatable';
import AwesomeLoading from 'react-native-awesome-loading';
import { StackActions } from '@react-navigation/native';
import { useTheme } from 'react-native-paper';
import { useAuth } from '../../contexts/auth';
import { decodeMessage } from '../../services/decodeMessage'
import stylesCommon from '../../components/stylesCommon'
import { api } from '../../services/api';
import FieldForm from '../../components/FieldForm';
import ButtonDisable from '../../components/ButtonDisable';
import Button from '../../components/Button';
import { sub } from 'date-fns';

const NewFeedScreen = ({ navigation }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [load, setLoad] = useState(true)
  const { colors } = useTheme();
  const { user, _showAlert } = useAuth();
  const [input, setInput] = useState('');
  const [text, setText] = useState('');
  const [enableButton, setEnableButton] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {


  }, [load, navigation])


  function _onError(error) {
    console.log('_onError: ', error)

    if (error == 401) {
      signOut()
      _showAlert('warning', 'Ooops!', decodeMessage(error), 7000);
      navigation.navigate('SignInTab')
    } else {
      _showAlert('danger', 'Ooops!', decodeMessage(error), 7000);
    }

  }

  const handleInputChange = (val) => {
    setInput(val);
    if (val.length > 0) {
      setEnableButton(true)
      setText('Digite seu post')
    } else {
      setEnableButton(false)
      setText('')
    }
  }


  const onClickDummy = () => {
    console.log('--- dummy ---')


  };

  const onClickPost = () => {
    console.log('--- Delete Feed ---')

    setIsLoading(true)

    const dateNowGMT = new Date()
    const dateNow = sub(dateNowGMT, { hours: 3 });


    const obj = {
      userId: user.id,
      mensagem: input,
      createAt: dateNow
    }

    api.post('/feeds', obj)
      .then((response) => {
        setIsLoading(false)
        console.log('Retorno da api create post', response.data)
        navigation.dispatch(
          StackActions.popToTop('CriarTrajetoTrajetosTab', { refreshScreen: true })
        )
      })
      .catch((error) => {
        setIsLoading(false)
        console.error('Erro na api create post:', error)
        const statusCode = error.response?.status
        _onError(statusCode);
      });
  };


  return (

    isLoading ?
    < View style={{ alignItems: "center"}}>
      <AwesomeLoading indicatorId={8} size={50} isActive={true} text="" />
    </View >

    :


    <View style={stylesCommon.container}>
      <StatusBar backgroundColor='#009387' barStyle="light-content" />
      <Animatable.View
        animation="fadeInUpBig"
        style={[stylesCommon.footer, {
          backgroundColor: colors.background
        }]}
      >
        <FieldForm
          text={text}
          onFocus={() => { setIsFocused(true) }}
          isFocused={isFocused}
          placeholder={'digite seu post aqui_'}
          multiline={true}
          numberOfLines={5}
          value={input}
          onChangeText={handleInputChange}
          keyboardType={'default'}
        />
        <Animatable.View animation="fadeInLeft" duration={500}>
          <Text style={stylesCommon.infoMsg}>Até 500 caracteres</Text>
        </Animatable.View>


        {enableButton ?
          <Button
            text={'Publicar'}
            onClick={onClickPost}
            top={45}
            flag={""}
          />
          :
          <ButtonDisable
            text={'Publicar'}
            onClick={onClickDummy}
            top={45}
          />
        }

      </Animatable.View>
    </View>
  );

};

export default NewFeedScreen;

const styles = StyleSheet.create({

  label: {
    marginLeft: 8,
    marginTop: -7,
    fontSize: 16,
    color: 'gray',
    fontWeight: "bold"
  },

  icon: {
    marginTop: 13,
    marginLeft: 10,
    marginRight: 10,
  },

  text: {
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 0,
    fontSize: 15,
    color: 'gray',
    fontWeight: "bold"

  },

  container: {
    flexDirection: 'row',
    marginBottom: 10,
    marginTop: 15,
    backgroundColor: "white",
    height: 40,
  },

});
