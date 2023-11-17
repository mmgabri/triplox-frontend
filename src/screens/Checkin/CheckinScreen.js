import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, StatusBar, ScrollView, SafeAreaView, TouchableOpacity, FlatList } from 'react-native'; import * as Animatable from 'react-native-animatable';
import { addDays, subDays, format, getDate, isSameDay, startOfWeek } from 'date-fns';
import Icon from 'react-native-vector-icons/FontAwesome'
import { useTheme } from 'react-native-paper';
import { CheckinSeparatorItem } from './CheckinSeparatorItem';
import { CheckinItem } from './CheckinItem';
import stylesCommon from '../../components/stylesCommon'
import { useAuth } from '../../contexts/auth';
import { decodeMessage } from '../../services/decodeMessage'
import { api } from '../../services/api';
import BoxInfo from '../../components/BoxInfo';

const CheckinScreen = ({ navigation }) => {
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [week, setWeek] = useState([]);
  const [date, setDate] = useState();
  const [dateFormat, setDateFormat] = useState();
  const [trajetosData, setTrajetosData] = useState([]);
  const {user, isAuthenticated, _showAlert } = useAuth();
  const [load, setLoad] = useState(true)
  const [test, setTest] = useState(false)

  //==> Carregamento inicial da tela
  useEffect(() => {
    console.log('========================= Entro na tela checkin =========================')
    navigation.addListener('focus', () => setLoad(!load))

    //Carrega dos da semana
    const dateNow = new Date()

    //Formata data do dia
    const dateFormatAux = format(dateNow, "dd'/'MM'/'yyyy")
    setDateFormat(dateFormatAux)

    //Monta array dos dias da semana
    setDate(dateNow)
    const weekDays = getWeekDays(dateNow);
    setWeek(weekDays);

    //Obtem Trajetos
    getTrajetos();


  }, [load, navigation])

  const getTrajetos = () => {

    console.log('trajetos...')

    api.get('/trajetos/' + user.id)
      .then((response) => {
        console.log('Retorno da api listar trajetos:', response.data)
        if (response.data.length == 0) {
          navigation.navigate('CriarTrajeto0Tab')
        }
        setTrajetosData(response.data)
        updateStatusCheckin(date)
        setIsRefreshing(false)
      })
      .catch((error) => {
        setIsRefreshing(false)
        console.error('Erro na api listar trajetos:', error)
        const statusCode = error.response?.status
        _showAlert('danger', 'Ooops!', decodeMessage(statusCode), 5000);
      });

  };


  //==> Trata data selecionada
  function selectedDate(value) {
    console.log('Data selecionada: ', value)
    updateStatusCheckin(value)
    setDate(value)
    setDateFormat(format(value, "dd'/'MM'/'yyyy"))
  }

  function updateStatusCheckin(dataCheckin) {

    let count = trajetosData.length

    for (let i = 0; i < count; i++) {
  //    console.log('trajeto', trajetosData[i])
      getAndUpdateCheckin(trajetosData[i], i, format(dataCheckin, "yyyy'-'MM'-'dd"))
    }
  }


  function getAndUpdateCheckin(trajeto, index, data) {
    console.log('getAndUpdateCheckin==============================>', trajeto.id, index)

    api.get('/checkins/data/' + data + '/linha/' + trajeto.linhaId + '/trajeto/' + trajeto.id + '/user/' + user.id)
      .then((response) => {
        console.log('Retorno da api listar trajetos por user ===========>:', response.data)
        console.log('count:', response.data.length)

        if (response.data.length == 0) {
          console.log('Sem checkin')
          trajetosTemp = trajetosData
          trajetosTemp[index].checkinRealizado = false
          setTest(true)
          console.log('trajetosTemp:', trajetosTemp)
          setTrajetosData(trajetosTemp)
        }else {
          console.log('Com checkin')          
          trajetosTemp = trajetosData
          trajetosTemp[index].checkinRealizado = true
          trajetosTemp[index].checkinId = response.data.id
          console.log('trajetosTemp:', trajetosTemp)
          setTest(false)
          setTrajetosData(trajetosTemp)
        }
      })
      .catch((error) => {
        setIsRefreshing(false)
        console.error('Erro na api listar trajetos:', error)
        const statusCode = error.response?.status
        _showAlert('danger', 'Ooops!', decodeMessage(statusCode), 5000);
      });

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

  function onClickNew(id, linhaId) {
    console.log('onClickNew ==>', id, linhaId)
    console.log('trajetosData:', trajetosData)
    const obj = {
      userId: user.id,
      data: format(date, "yyyy'-'MM'-'dd"),
      linhaId: linhaId,
      trajetoId: id
    }

    api.post('/checkins', obj)
      .then((response) => {
        console.log('Retorno da api new checkin:', response.data)
        _showAlert('success', "Obaa", 'Check-in realizado !', 6000);
        updateStatusCheckin(date)
      })
      .catch((error) => {
        console.error('Erro na api new checkin:', error)
        const statusCode = error.response?.status
        _showAlert('danger', 'Ooops!', decodeMessage(statusCode), 5000);
      });
  }

  function onClickCancel(id) {
    console.log('onClickCancel ==>', id)

    api.delete('/checkins/' + id)
      .then((response) => {
        console.log('Retorno da api cancel checkin:', response.data)
        _showAlert('success', "Obaa", 'Check-in cancelado !', 6000);
        updateStatusCheckin(date)
      })
      .catch((error) => {
        console.error('Erro na api cancel checkin:', error)
        const statusCode = error.response?.status
        _showAlert('danger', 'Ooops!', decodeMessage(statusCode), 5000);
      });
  }

  const onRefresh = () => {
    console.log('------------------------onRefresh')
    setIsRefreshing(true)
    getTrajetos()
  }

  function renderItem({ item }) {
    return <CheckinItem  {...item} onClickNew={onClickNew} onClickCancel={onClickCancel}/>;
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
        text2={dateFormat}
      />
      <View>
        <Text>{test}</Text>
      </View>

      <FlatList
        style={styles.textBox1}
        ItemSeparatorComponent={CheckinSeparatorItem}
        data={trajetosData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        onRefresh={onRefresh}
        refreshing={isRefreshing}
      />


    </SafeAreaView>


  );

};

export default CheckinScreen;

const styles = StyleSheet.create({
  textBox1: {
    backgroundColor: "white"

  },
})

