import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

const BoxInfo = ({ top, icon, text1, text2, text3, text4 }) => {
    return (
        <View style={[styles.container, { marginTop: top }]} >
            <View style={styles.InfBox2}>
                <TouchableOpacity style={styles.icon}>
                    <Icon name={icon} size={20} color="#696969" />
                </TouchableOpacity>
                <View>
                    <Text style={styles.label}>
                        {text1}
                    </Text>
                    <Text style={styles.value}>
                        {text2}
                    </Text>
                    {text3 != null &&
                        <Text style={styles.textBox3}>
                            {text3}
                        </Text>}
                    {text4 != null &&
                        <Text style={styles.textBox3}>
                            {text4}
                        </Text>}
                </View>

            </View>
        </View>
    )
}

export default BoxInfo;


const styles = StyleSheet.create({
    container: {
        flex: 0,
        borderRadius: 5,
        height: -200,
        marginRight: 2,
        marginLeft: 2,
        marginRight: 2,
        marginBottom: 7,
        marginTop: 7,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
        backgroundColor: 'white',
        borderColor: "#DCDCDC"
    },
    label: {
        marginLeft: 10,
        marginTop: 5,
        marginBottom: 5,
        fontSize: 15,
        color: 'gray',
    },

    value: {
        marginLeft: 5,
        marginTop: -5,
        marginBottom: 5,
        marginLeft: 10,
        fontSize: 15,
        color: 'gray',
        fontWeight: 'bold'
    },
    InfBox2: {
        flexDirection: 'row',
    },
    icon: {
        marginTop: 18,
        marginLeft: 10,
        marginRight: 10,
    },
    textBox3: {
        marginLeft: 7,
        marginTop: -4,
        fontSize: 15,
        color: 'gray',
        fontWeight: 'bold'
    },
});
