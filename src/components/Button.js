import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import stylesCommon from '../components/stylesCommon';
const Button = ({ anuncio, text, onClick, top, flag }) => {
    return (
        <View style={[stylesCommon.button, { marginTop: top }]} >
            {flag != null ?

                <TouchableOpacity
                    style={stylesCommon.button_styte}
                    onPress={() => { onClick(anuncio) }}
                >

                    <LinearGradient
                        colors={['#08d4c4', '#01ab9d']}
                        style={stylesCommon.button_styte}
                    >
                        <Text style={[stylesCommon.button_text, {
                            color: '#fff'
                        }]}>{text}</Text>
                    </LinearGradient>

                </TouchableOpacity>
                :
                <TouchableOpacity
                    style={stylesCommon.button_styte}
                >
                    <LinearGradient
                        colors={['#A9A9A9', '#A9A9A9']}
                        style={stylesCommon.button_styte}
                    >
                        <Text style={[stylesCommon.button_text, {
                            color: '#fff'
                        }]}>{text}</Text>
                    </LinearGradient>
                </TouchableOpacity>
            }
        </View>
    )
}

export default Button;