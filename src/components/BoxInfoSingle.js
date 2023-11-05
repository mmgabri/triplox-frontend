import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

const BoxInfoSingle = ({ top, icon, text1}) => {
    return (
        <View style={[styles.InfBox1, { marginTop: top }]} >
            <View style={styles.InfBox2}>
                <TouchableOpacity style={styles.icon}>
                    <Icon name={icon} size={20} color="#696969" />
                </TouchableOpacity>
                <View>
                    <Text style={styles.textBox1}>
                        {text1}
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default BoxInfoSingle;


const styles = StyleSheet.create({
    InfBox1: {
        flex: 0,
        borderRadius: 5,
        height: -200,
        margin: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
        backgroundColor: 'white',
    },
    InfBox2: {
        flexDirection: 'row',
    },
    icon: {
        marginTop: 12,
        marginLeft: 10,
        marginRight: 10,
    },
    textBox1: {
        marginLeft: 5,
        marginTop: 13,
        marginBottom: 5,
        fontSize: 15,
        color: '#000000'

    },
    textBox2: {
        marginLeft: 5,
        marginTop: -5,
        fontSize: 15,
        color: '#696969'
    },
});
