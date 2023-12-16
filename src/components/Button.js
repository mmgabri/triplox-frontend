import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import stylesCommon from '../components/stylesCommon';
const Button = ({ anuncio, text, onClick, top, flag, paddingHor }) => {
    return (
        <View style={[stylesCommon.button, { marginTop: top }]} >
            {flag != null ?

                <TouchableOpacity
                    style={[styles.button_styte, {paddingHorizontal: paddingHor}]}
                    onPress={() => { onClick(anuncio) }}
                >

                    <LinearGradient
                        colors={['#BA4DE3', '#BA4DE3']}
                        style={[styles.button_styte, {paddingHorizontal: paddingHor}]}
                    >
                        <Text style={[styles.button_text, {
                            color: '#fff'
                        }]}>{text}</Text>
                    </LinearGradient>

                </TouchableOpacity>
                :
                <TouchableOpacity
                style={[styles.button_styte, {paddingHorizontal: paddingHor}]}
                onPress={() => { onClick(anuncio) }}
                >
                    <LinearGradient
                        colors={['#A9A9A9', '#A9A9A9']}
                        style={[styles.button_styte, {paddingHorizontal: paddingHor}]}
                    >
                        <Text style={[styles.button_text, {
                            color: '#fff'
                        }]}>{text}</Text>
                    </LinearGradient>
                </TouchableOpacity>
            }
        </View>
    )
}

export default Button;

const styles = StyleSheet.create({
    button_styte: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    button_text: {
        fontSize: 18,
        fontWeight: 'bold'
    },
})