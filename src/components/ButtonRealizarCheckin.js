import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome'

import stylesCommon from './stylesCommon';

const ButtonRealizarCheckin = ({ anuncio, text, onClick, top }) => {
    return (
        <View style={[styles.button, { marginBottom: top }]} >
            <TouchableOpacity
                style={stylesCommon.button_styte}
                onPress={() => { onClick(anuncio) }}
            >
                <LinearGradient
                    colors={['#008000', '#008000']}
                    style={stylesCommon.button_styte}
                >
                    <View style={stylesCommon.container2}>
                        <TouchableOpacity onPress={() => { onClick(value) }} style={stylesCommon.button_styte_icon}>
                            <Icon name="check" size={20} color="white" />
                        </TouchableOpacity>
                        <Text style={[stylesCommon.button_text, {
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
        margin: 20
        
    },
})