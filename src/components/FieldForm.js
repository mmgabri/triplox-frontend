import React from 'react';
import { View, TextInput, Text } from 'react-native';
import { useTheme } from 'react-native-paper';
import stylesCommon from '../components/stylesCommon'

const FieldForm = ({ text, onFocus, isFocused, placeholder, multiline, numberOfLines, value, onChangeText, keyboardType }) => {
    const { colors } = useTheme();
    return (
        <View>
            <View>
                <Text style={[stylesCommon.text_footer, {
                    color: 'gray'
                }]}>{text}
                </Text>
            </View>

            <View style={stylesCommon.action}>
                <TextInput
                    onFocus={() => onFocus(false)}
                    selectionColor="#993399"
                    underlineColorAndroid={{ isFocused } ? "#993399" : "#D3D3D3"}
                    placeholder={placeholder}
                    placeholderTextColor="#666666"
                    style={[stylesCommon.textInput, { color: 'gray' }]}
                    multiline={multiline}
                    numberOfLines={numberOfLines}
                    autoCapitalize="none"
                    value={value}
                    onChangeText={(val) => onChangeText(val)}
                    keyboardType={keyboardType}
                />
            </View>

         
        </View >
    )
}

export default FieldForm;