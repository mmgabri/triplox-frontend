import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

const BoxInfo = ({ top, icon, text1, text2 }) => {
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
                    <Text style={styles.textBox2}>
                        {text2}
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default BoxInfo;


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
        marginTop: 18,
        marginLeft: 10,
        marginRight: 10,
    },
    textBox1: {
        marginLeft: 5,
        marginTop: 5,
        marginBottom: 5,
        fontSize: 15,
        color: '#1C1C1C'

    },
    textBox2: {
        marginLeft: 5,
        marginTop: -5,
        fontSize: 15,
        color: '#696969'
    },
});
