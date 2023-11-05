import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome'


const Button = ({ text1, text2, onClick, top, value }) => {
    return (
        <View style={[styles.button_checkin, { marginTop: top }]} >
            <TouchableOpacity
                style={styles.button_styte_checkin}
                onPress={() => { onClick(value) }}
            >
                <LinearGradient
                    colors={['#8A2BE2', '#8A2BE2']}
                    style={styles.button_styte_checkin}
                >
                    <View style={styles.container2}>
                        <Text onPress={() => { onClick(value) }} style={[styles.button_text1_checkin, { color: '#fff' }]}>{text1}</Text>
                        <TouchableOpacity onPress={() => { onClick(value) }} style={styles.button_styte_icon}>
                            <Icon name="hand-o-right" size={25} color="white" />
                        </TouchableOpacity>
                        <Text onPress={() => { onClick(value) }} style={[styles.button_text2_checkin, { color: '#fff' }]}>{text2}</Text>
                    </View>
                    <View style={styles.container}>
                        <Text style={[styles.button_text1_ponto_checkin, { color: '#fff' }]}>Ponto: xxxxxxxxxxxxxxxxxxxx</Text>
                        <Text style={[styles.button_text1_ponto_checkin, { color: '#fff' }]}>checkin realizado</Text>
                    </View>

                </LinearGradient>
            </TouchableOpacity>
        </View>
    )
}

export default Button;


const styles = StyleSheet.create({

    container: {
        alignItems: 'left',

    },
    button_text1_ponto_checkin: {
        fontSize: 15,
        marginTop: 0,
        marginLeft: -150,
        alignItems: 'left',
        fontWeight: 'bold'
    },
    button_styte_checkin: {
        width: '100%',
        height: 95,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },
    container2: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 10,
    },

    button_checkin: {
        alignItems: 'center',
        margin: 10
    },

    button_text1_checkin: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 0
    },
    button_text2_checkin: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 0
    },

    button_styte_icon: {
        width: '100%',
        marginTop: 0,
        marginBottom: -50,
        marginLeft: -170,
        marginRight: -170,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
});
