import React from "react";
import {
  Image,
  useWindowDimensions,
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'


export function Header(value) {
  const window = useWindowDimensions();

  return (
    <>
      <View style={[styles.InfBox1, { marginTop: 20 }]} >
        <View style={styles.InfBox2}>
          <TouchableOpacity style={styles.icon}>
            <Icon name="bus" size={20} color="#696969" />
          </TouchableOpacity>
          <View>
            <Text style={styles.textBox1}>
              {value}
            </Text>
          </View>

        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  InfBox1: {
    flex: 0,
    borderRadius: 5,
    height: -200,
    marginRight: 2,
    marginLeft: 2,
    marginRight: 2,
    marginBottom: 7,
    marginTop: -7,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
    backgroundColor: 'white',
    borderColor: "#DCDCDC"
  },
  InfBox2: {
    flexDirection: 'row',
  },
  icon: {
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
  },
  textBox1: {
    marginTop: 5,
    fontSize: 17,
    color: '#1C1C1C'

  }
});