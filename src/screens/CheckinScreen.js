import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, StatusBar, ScrollView } from 'react-native'; import * as Animatable from 'react-native-animatable';
//import { View, Text, StatusBar, ScrollView , StyleSheet} from 'react-native';
import stylesCommon from '../components/stylesCommon'
import Button from '../components/Button';
import ButtonTransparent from '../components/ButtonTransparent';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { useTheme } from 'react-native-paper';
import { useAuth } from '../contexts/auth';
import { decodeMessage } from '../services/decodeMessage'
import { api } from '../services/api';


const CheckinScreen = ({ navigation }) => {
  const { user, isAuthenticated, _showAlert } = useAuth();
  const [selected, setSelected] = useState('');
  const [checkin, setCheckin] = useState({});
  const [load, setLoad] = useState(true)
  const { colors } = useTheme();

  useEffect(() => {
    console.log('Entro na tela checkin', checkin)

    navigation.addListener('focus', () => setLoad(!load))

  }, [load, navigation])

  //Próxima tela
  const continuar = async () => {
    console.log('Click:>', selected)
    let checkin = ({
      data: selected,
      linhaId: user.linhaId,
      userId: user.id
    })
    console.log('Checkin:', checkin)
    setCheckin(checkin)
    navigation.navigate('CheckinSentidoTab', { checkin: checkin })

  }

  return (
    <View style={stylesCommon.container}>
      <StatusBar backgroundColor='#009387' barStyle="light-content" />
      <ScrollView>
        <Animatable.View
          animation="fadeInUpBig"
          style={[stylesCommon.footer, {
            backgroundColor: colors.background
          }]}
        >
          <Text style={[stylesCommon.text_footer, {
            color: colors.text
          }]}>Escolha uma data</Text>

          <>
            <Calendar
              onDayPress={day => {
                setSelected(day.dateString);
              }}
              markedDates={{
                [selected]: { selected: true, disableTouchEvent: true, selectedDotColor: 'orange' }
              }}
            />
          </>

          <View>
            <Button
              text={'Continuar'}
              onClick={continuar}
              top={40}
            />
          </View>


          <View>
            <Text></Text>
            <Text></Text>
            <Text></Text>
          </View>


        </Animatable.View>

      </ScrollView>
    </View>


  );

};

export default CheckinScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009387'
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
