import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome'

import stylesCommon from './stylesCommon';

const ButtonRealizarCheckin = ({ anuncio, text, onClick, top }) => {
    return (
        <View style={[styles.button, { marginBottom: top }]} >
            <TouchableOpacity
                style={styles.button_styte}
                onPress={() => { onClick(anuncio) }}
            >
                <LinearGradient
                    colors={['#008000', '#008000']}
                    style={styles.button_styte}
                >
                    <View style={styles.container2}>
                        <Text style={[styles.button_text, {
                            color: '#fff'
                        }]}>{text}</Text>
                    </View>
                </LinearGradient>
            </TouchableOpacity>
        </View>
    )
}

export default ButtonRealizarCheckin;

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 0
        
    },
    button_styte: {
        marginTop: -5,
        width: '100%',
        width: 150,
        height: 40,
        justifyContent: 'left',
        alignItems: 'left',
        borderRadius: 10,
    },
    container2: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 10,
    },
    button_text: {
        fontSize: 15,
        fontWeight: 'bold'
    },
})