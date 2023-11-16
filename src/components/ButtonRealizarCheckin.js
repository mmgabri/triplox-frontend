import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome'

import stylesCommon from './stylesCommon';

const ButtonRealizarCheckin = ({ anuncio, text, onClick, top }) => {
    return (
        <View>
            <TouchableOpacity
                onPress={() => { onClick(anuncio) }}
            >
                <LinearGradient
                    colors={['#008000', '#008000']}
                    style={styles.button}
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
    button: {
        paddingHorizontal: 12,
        paddingVertical: 4,
        borderRadius: 12,
        backgroundColor: 'white',
        alignSelf: "flex-start",
        marginHorizontal: '0%',
        marginVertical: "1%",
        marginBottom: 6,
        minWidth: '48%',
        textAlign: 'center',
    },
    container2: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: 10,
    },
    button_text: {
        fontSize: 15,
        fontWeight: 'bold'
    },
})