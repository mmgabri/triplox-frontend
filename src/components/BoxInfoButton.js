import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

const BoxInfoButton = ({ top, icon, text1, onClick }) => {
    return (
        <TouchableOpacity onPress={() => { onClick() }}>
            <View  style={[styles.InfBox1, { marginTop: top }]} >
                <View style={styles.InfBox2}>
                    <TouchableOpacity
                        style={styles.icon}>
                        <Icon name={icon} size={20} color="#0000CD" />
                    </TouchableOpacity>
                    <View>
                        <Text style={styles.textBox3}>
                            {text1}
                        </Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default BoxInfoButton;


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
        marginBottom: 10
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
    textBox3: {
        marginLeft: 5,
        marginTop: 18,
        fontSize: 15,
        color: '#0000CD'
    },
});
