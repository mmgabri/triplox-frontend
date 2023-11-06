import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, StatusBar, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native'; import * as Animatable from 'react-native-animatable';
import { addDays, subDays, format, getDate, isSameDay, startOfWeek } from 'date-fns';
import Icon from 'react-native-vector-icons/FontAwesome'
import stylesCommon from '../components/stylesCommon'
import Button2 from '../components/Button2';
import ButtonCheckin from '../components/ButtonCheckin';
import { useTheme } from 'react-native-paper';
import { useAuth } from '../contexts/auth';
import { decodeMessage } from '../services/decodeMessage'
import { api } from '../services/api';
import BoxInfo from '../components/BoxInfo';
import BoxInfo2 from '../components/BoxInfo2';

const CheckinScreen = ({ navigation }) => {
  const [week, setWeek] = useState([]);
  const [date, setDate] = useState();
  const { user, isAuthenticated, _showAlert } = useAuth();
  const [selected, setSelected] = useState('');
  const [checkin, setCheckin] = useState({});
  const [load, setLoad] = useState(true)
  const { colors } = useTheme();

  //==> Carregamento inicial da tela
  useEffect(() => {
    console.log('========================= Entro na tela checkin =========================', checkin)
    navigation.addListener('focus', () => setLoad(!load))

    //Carrega dos da semana
    const dateNow = new Date()
    console.log('Data do sistema:', dateNow)
    setDate(dateNow)
    const weekDays = getWeekDays(dateNow);
    setWeek(weekDays);

    //Obtem dias da semana
    api.get('/linhas/' + user.linhaId)
      .then((response) => {
        console.info("Api executada com sucesso", response.data)
        let checkin = ({
          linhaId: response.data.id,
          userId: user.id,
          cidadeOrigem: response.data.cidadeOrigem,
          cidadeDestino: response.data.cidadeDestino,
          nome: response.data.nome
        })
        setCheckin(checkin)
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.error('Erro na chamada da api:', error)
        onError(error)
      });



  }, [load, navigation])

  //==> Tratamento de erro na chamada de apis
  function onError(error) {
    console.log("onError")
    const statusCode = error.response?.status;

    if (statusCode == 401) {
      _showAlert('info', 'Ooops!', decodeMessage(statusCode), 4000);
      navigation.navigate('SignInTab')
    }
    _showAlert('danger', 'Ooops!', decodeMessage(statusCode), 7000);
  }


  //==> Trata data selecionada
  function selectedDate(value) {
    console.log('Data selecionada: ', value)
    setDate(value)
  }

  //==> Trata data selecionada
  const execute = (value) => {
    console.log('Execute', value)
    const dataFormat = format(date, "yyyy'-'MM'-'dd")
    console.log('Data selecionada: ', dataFormat)

    let obj = checkin;
    obj.data = dataFormat
    obj.sentido = value
    console.log('Obj: ', obj)

    //  navigation.navigate('CheckinConfirm', { checkin: obj, })

  }

  //==> Altera semana
  function alterWeek(value) {
    console.log('Onclick:', value)

    if (value == 'next') {
      const date1 = week[6];
      const date2 = addDays(date1.date, 1);
      const weekDays = getWeekDays(date2);
      setWeek(weekDays);
    } else {
      const date1 = week[0];
      const date2 = subDays(date1.date, 1);
      const weekDays = getWeekDays(date2);
      setWeek(weekDays);
    }

  }

  //==> Get week days
  function getWeekDays(date) {
    const start = startOfWeek(date, { weekStartsOn: 1 });
    const final = [];

    for (let i = 0; i < 7; i++) {
      const date = addDays(start, i);
      final.push({
        formatted: format(date, 'EEE'),
        date,
        day: getDate(date),
      });
    }
    return final;
  }

  function alterarDadosLinha() {
    console.log('alterarDadosLinha')
  }

  return (
    <SafeAreaView style={stylesCommon.safe}>
      <View style={stylesCommon.container2}>
        <View style={[stylesCommon.button_calendar1]} >
          <TouchableOpacity
            style={stylesCommon.button_styte}
            onPress={() => alterWeek('back')}>
            <Icon name="step-backward" size={15} />
          </TouchableOpacity>
        </View>

        {week.map((weekDay) => {
          const textStyles = [stylesCommon.label];
          const touchable = [stylesCommon.touchable];
          const sameDay = isSameDay(weekDay.date, date);
          if (sameDay) {
            textStyles.push(stylesCommon.selectedLabel);
            touchable.push(stylesCommon.selectedTouchable);
          }

          return (
            <View style={stylesCommon.weekDayItem} key={weekDay.formatted}>
              <Text style={stylesCommon.weekDayText}>{weekDay.formatted}</Text>
              <TouchableOpacity
                onPress={() => selectedDate(weekDay.date)}
                style={touchable}>
                <Text style={textStyles}>{weekDay.day}</Text>
              </TouchableOpacity>
            </View>
          );
        })}
        <View style={[stylesCommon.button_calendar2]} >
          <TouchableOpacity
            style={stylesCommon.button_styte}
            onPress={() => alterWeek('next')}>
            <Icon name="step-forward" size={15} />
          </TouchableOpacity>
        </View>
      </View>

      <BoxInfo
        top={0}
        icon={'calendar'}
        text1={'Data'}
        text2={'10/11/2023'}
      />

      <BoxInfo
        top={0}
        icon={'bus'}
        text1={'Linha'}
        text2={checkin.nome}
      />

      <BoxInfo2
        top={0}
        icon={'check-square'}
        text1={'Saída: ' + checkin.cidadeOrigem}
        text2={'Ponto: Posto Shell'}
        text3={'Previsão: 05:00'}
        text4={'Vagas restantes: 20 - Ver lista de presença'}
        onClick={execute}
      />

      <BoxInfo2
        top={0}
        icon={'check-square'}
        text1={'Saída: São Paulo'}
        text2={'Ponto: Itaú CEIC'}
        text3={'Previsão: 17:40'}
        text4={'Vagas restantes: 5 - Ver lista de presença'}
        onClick={execute}
      />


    </SafeAreaView>


  );

};

export default CheckinScreen;

const styles = StyleSheet.create({
  textBox1: {
    marginLeft: 20,
    marginTop: 17,
    marginBottom: 5,
    fontSize: 15,
    color: '#363636'

  },
})

