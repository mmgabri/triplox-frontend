import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import ButtonRealizarCheckin from './ButtonRealizarCheckin';

const BoxInfo2 = ({ top, icon, text1, text2, text3, text4, onClick }) => {
    return (
        <View style={[styles.InfBox1, { marginTop: top }]} >
            <View style={styles.InfBox2}>
                <TouchableOpacity style={styles.icon}>
                    <Icon name={icon} size={20} color="#696969" />
                </TouchableOpacity>
                <View  style={styles.InfBox3}>
                    <Text style={styles.textBox1}>
                        {text1}
                    </Text>
                    <Text style={styles.textBox2}>
                        {text2}
                    </Text>
                    <Text style={styles.textBox2}>
                        {text3}
                    </Text>
                    <Text style={styles.textBox2}>
                        {text4}
                    </Text>
                </View>
            </View>
            <View style={styles.InfBoxButton}>
                <ButtonRealizarCheckin
                    text={'Fazer check-in'}
                    onClick={onClick}
                    top={0}
                />
            </View>

        </View>
    )
}

export default BoxInfo2;


const styles = StyleSheet.create({
    InfBoxButton: {
        flex: 0,
        borderRadius: 5,
        height: 55,
        marginTop: 10,
        marginBottom: -5,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
        backgroundColor: 'white',
    },
    InfBox1: {
        flex: 0,
        borderRadius: 5,
        height: -1,
        marginRight: 2,
        marginLeft: 2,
        marginRight: 2,
        marginTop: 7,
        marginBottom: 7,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
        backgroundColor: 'white',
    },
    InfBox2: {
        flexDirection: 'row',
        height: 70
    },
    InfBox3: {
        height: 75
    },
    icon: {
        marginTop: 33,
        marginLeft: 10,
        marginRight: 10,
    },
    textBox1: {
        marginLeft: 5,
        marginTop: 5,
        marginBottom: 5,
        fontSize: 15,
        color: '#1C1C1C'

    },
    textBox2: {
        marginLeft: 5,
        marginTop: -5,
        marginBottom: 0,
        fontSize: 15,
        color: '#696969'
    },
});
