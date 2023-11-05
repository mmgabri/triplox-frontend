import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import stylesCommon from './stylesCommon';

const Button2 = ({ anuncio, text, onClick, top }) => {
    return (
        <View style={[styles.button, {marginTop: top}]} >
            <TouchableOpacity
                style={styles.button_styte}
                onPress={() => { onClick(anuncio) }}
            >
                <LinearGradient
                    colors={['#8A2BE2', '#8A2BE2']}
                    style={styles.button_styte}
                >
                    <Text style={[styles.button_text, {
                        color: '#fff'
                    }]}>{text}</Text>
                </LinearGradient>
            </TouchableOpacity>
        </View>
    )
}

export default Button2;

const styles = StyleSheet.create({
    
    button: {
        alignItems: 'center',
        marginTop: 200,
        marginLeft: 30,
        marginRight: 30
    },

    button_styte: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
    },

    button_text: {
        fontSize: 18,
        fontWeight: 'bold'
    },

    

})

