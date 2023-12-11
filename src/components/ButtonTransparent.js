import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import stylesCommon from './stylesCommon';

const ButtonTransparent = ({ text, onClick, top, value }) => {

    return (

        <View style={[stylesCommon.button, { marginTop: top }]} >
            <TouchableOpacity
                onPress={() => { onClick(value) }}
                style={[stylesCommon.button_styte, {
                    borderColor: '#993399',
                    borderWidth: 1,
                    marginTop: 2
                }]}
            >
                <Text style={[stylesCommon.button_text, {
                    color: '#993399'
                }]}>{text}</Text>
            </TouchableOpacity>
        </View >
    )
}

export default ButtonTransparent;