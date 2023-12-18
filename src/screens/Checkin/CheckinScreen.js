import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, StatusBar, Dimensions, TextStyle } from 'react-native';
import { addDays, subDays, format, getDate, isSameDay, startOfWeek, sub } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import Icon from 'react-native-vector-icons/FontAwesome'

import CheckinItem from './CheckinItems';
import stylesCommon from '../../components/stylesCommon'
import { useAuth } from '../../contexts/auth';
import { decodeMessage } from '../../services/decodeMessage'
import { api } from '../../services/api';


const CheckinScreen = ({ navigation }) => {
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [week, setWeek] = useState([]);
  const [date, setDate] = useState();
  const [dateFormat, setDateFormat] = useState();
  const [trajetosData, setTrajetosData] = useState([]);
  const { user, _showAlert, signOut } = useAuth();
  const [load, setLoad] = useState(true)
  const [isSucess, setIsSucess] = useState(false);

  //==> Carregamento inicial da tela
  useEffect(() => {
    console.log('========================= Entrou na tela checkin ========================= date: ', date)
    navigation.addListener('focus', () => setLoad(!load))

    //Carrega dos da semana
    const dateNowGMT = new Date()
    const dateNow = sub(dateNowGMT, { hours: 3 });

    console.log('Data agora: ', dateNow)

    //Formata data do dia
    const dateFormatAux = format(dateNow, "dd'/'MM'/'yyyy", { locale: ptBR })

    setDateFormat(dateFormatAux)

    //Monta array dos dias da semana
    setDate(dateNow)
    const weekDays = getWeekDays(dateNow);
    setWeek(weekDays);

    //Obtem Trajetos
    getTrajetos(dateNow);


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


  const getTrajetos = (data) => {

    if (data == null) {
      dataAux = format(date, "yyyy'-'MM'-'dd", { locale: ptBR })
    } else {
      dataAux = format(data, "yyyy'-'MM'-'dd", { locale: ptBR })
    }

    api.get('/trajetos/list/user-and-data/?user=' + user.id + '&data=' + dataAux)
      .then((response) => {
   //     console.log('Retorno da api listar trajetos:', response.data)
        if (response.data.length == 0) {
          navigation.navigate('CriarTrajeto0Tab')
        }
        setTrajetosData(response.data)
        setIsRefreshing(false)
      })
      .catch((error) => {
        setIsRefreshing(false)
        console.error('Erro na api listar trajetos:', error)
        const statusCode = error.response?.status
        _onError(statusCode)
      });

  };


  //==> Trata data selecionada
  function selectedDate(value) {
    console.log('Data selecionada: ', value)

    getTrajetos(value)

    setDate(value)
    setDateFormat(format(value, "dd'/'MM'/'yyyy", { locale: ptBR }))
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
        formatted: format(date, 'EEEEEE', { locale: ptBR }),
        date,
        day: getDate(date),
      });
    }
    return final;
  }

  function sleep(ms) {
    console.log('------------------------------>> timeout')
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  function onClickNew(id, linhaId, sentido, nomePontoOrigem) {
    console.log('onClickNew ==>', id, linhaId)
    console.log('trajetosData:', trajetosData)

    const dateNowGMT = new Date()
    const dateNow = sub(dateNowGMT, { hours: 3 });
    const dataNowFormatada = format(dateNow, 'yyyy-MM-dd');
    const dataCheckinFormatada = format(date, 'yyyy-MM-dd');

    console.log('Data agora: ', dataNowFormatada)
    console.log('Data chekin: ', dataCheckinFormatada)

    if (dataCheckinFormatada < dataNowFormatada) {
      _showAlert('warning', "Ooops", 'Não é permitido fazer check-in no passado!', 6000);
      return
    }

    diaSemana = format(date, 'EEEEEE', { locale: ptBR })
    if (diaSemana == 'sab' || diaSemana == 'dom') {
      _showAlert('warning', "Ooops", 'Não haverá viagem nesta data!', 6000);
      return
    }

    const obj = {
      userId: user.id,
      data: format(date, "yyyy'-'MM'-'dd", { locale: ptBR }),
      linhaId: linhaId,
      trajetoId: id,
      sentido: sentido,
      nomePontoOrigem
    }


    api.post('/checkins', obj)
      .then((response) => {
        console.log('Retorno da api new checkin:', response.data)
        setIsSucess(true)
        sleep(1000).then(() => { setIsSucess(false) });
        _showAlert('success', "Sucesso !", 'Check-in realizado.', 3000);
        getTrajetos(date)
      })
      .catch((error) => {
        console.error('Erro na api new checkin:', error)
        const statusCode = error.response?.status
        _onError(statusCode)
      });
  }

  function onClickCancel(id) {
    console.log('onClickCancel ==>', id)

    const dateNowGMT = new Date()
    const dateNow = sub(dateNowGMT, { hours: 3 });
    const dataNowFormatada = format(dateNow, 'yyyy-MM-dd');
    const dataCheckinFormatada = format(date, 'yyyy-MM-dd');


    console.log('Data agora: ', dataNowFormatada)
    console.log('Data chekin: ', dataCheckinFormatada)
    if (dataCheckinFormatada < dataNowFormatada) {
      _showAlert('warning', "Ooops", 'Não é permitido cancelar check-in de dias anteriores!', 6000);
      return
    }

    api.delete('/checkins/' + id)
      .then((response) => {
        console.log('Retorno da api cancel checkin:', response.data)
        _showAlert('success', "Sucesso !", 'Check-in cancelado.', 6000);
        getTrajetos(date)
      })
      .catch((error) => {
        console.error('Erro na api cancel checkin:', error)
        const statusCode = error.response?.status
        _onError(statusCode)
      });
  }


  function onClickCheckinsRealizados(linhaId, sentido, nomeLinha, cidadeOrigem, cidadeDestino) {
    console.log('onClickCheckinsRealizados ==>', linhaId, sentido)
    dataFormat = format(date, "yyyy'-'MM'-'dd", { locale: ptBR })

    const data = {
      linhaId: linhaId,
      sentido: sentido,
      dataCheckin: dataFormat,
      nomeLinha: nomeLinha,
      cidadeOrigem: cidadeOrigem,
      cidadeDestino: cidadeDestino
    }

    console.log('Data==>', data)

    navigation.navigate('CheckinListaPresencaTab', { data })
  }

  const onRefresh = () => {
    console.log('------------------------onRefresh')
    setIsRefreshing(true)
    getTrajetos()
  }

  return (
    isSucess ?
    <SafeAreaView style={styles.centered}>
    <Icon name="chevron-circle-down" size={70} color="white" />
  </SafeAreaView >
      :

      <SafeAreaView style={styles.safe}>
        <View style={stylesCommon.container2}>
          <View style={[styles.button_back]} >
            <TouchableOpacity
              style={stylesCommon.button_styte}
              onPress={() => alterWeek('back')}>
              <Icon name="step-backward" size={22} color="gray" />
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
          <View style={[styles.button_left]} >
            <TouchableOpacity
              style={stylesCommon.button_styte}
              onPress={() => alterWeek('next')}>
              <Icon name="step-forward" size={22} color="gray" />
            </TouchableOpacity>
          </View>
        </View>

        <View marginTop={5} flexDirection="row" backgroundColor="white" height={40}>
          <TouchableOpacity style={styles.icon_cidades} >
            <Icon name="calendar" marginBottom={3} marginLeft={0} marginRight={-10} size={20} color="gray" />
          </TouchableOpacity>

          <Text style={styles.text_value}>
            {dateFormat}
          </Text>
        </View>


        <CheckinItem
          trajetosData={trajetosData}
          onClickNew={onClickNew}
          onClickCancel={onClickCancel}
          onClickCheckinsRealizados={onClickCheckinsRealizados}
          onRefresh={onRefresh}
          isRefreshing={isRefreshing}
        />

      </SafeAreaView>

  );

};

export default CheckinScreen;

const styles = StyleSheet.create({
  textBox1: {
    backgroundColor: "white"
  },

  text_value: {
    marginLeft: 5,
    marginTop: 2,
    marginLeft: 15,
    fontSize: 15,
    color: 'gray',
    fontWeight: 'bold',
  },
  icon_cidades: {
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 10,
    marginRight: 5,
  },
  safe: {
    flex: 1,
    backgroundColor: "white"
  },
  safeSucess: {
    flex: 1,
    backgroundColor: "green"
  },
  button_back: {
    alignItems: 'center',
    marginRight: 3,
    marginLeft: 5,
    marginTop: 10
  },
  button_left: {
    alignItems: 'center',
    marginLeft: 3,
    marginRight: 5,
    marginTop: 10
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green",
  },

})

