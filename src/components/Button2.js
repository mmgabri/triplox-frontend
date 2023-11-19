import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Button2 = ({ anuncio, text, onClick, top, flag }) => {

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => { onClick(anuncio) }}>
                <LinearGradient colors={['#08d4c4', '#01ab9d']} style={styles.button_styte} >
                    <Text style={[styles.button_text, { color: '#fff' }]}>{text}</Text>
                </LinearGradient>
            </TouchableOpacity>
        </View>
    )
}

export default Button2


const styles = StyleSheet.create({
    container: {

    },

    button_styte: {
        width: '100%',
        height: 500,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },

    button_text: {
        fontSize: 18,
        fontWeight: 'bold'
    },

})