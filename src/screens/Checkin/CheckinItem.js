import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'
import ButtonRealizarCheckin from "../../components/ButtonRealizarCheckin";
import LinearGradient from 'react-native-linear-gradient';

export function CheckinItem({ id, nomePontoOrigem, cidadeOrigem, cidadeDestino, onClickNew }) {
    label = "alignItems"
    return (

        <View>
            <View style={styles.container}>
                <TouchableOpacity style={styles.icon} >
                    <Icon name="chevron-circle-down" marginTop={-20} marginLeft={1} size={22} color="gray" />
                </TouchableOpacity>


                <View>

                    <Text style={styles.text_title}>
                        {"Linha Indaiatuba x São Bernardo"}
                    </Text>

                    <View style={styles.container_cidade}>
                        <Text style={styles.text_title}>
                            {cidadeOrigem}
                        </Text>
                        <TouchableOpacity style={styles.icon_cidades} onPress={() => { onClick(id) }}>
                            <Icon name="arrow-circle-right" marginLeft={0} marginRight={-2} size={21} color="gray" />
                        </TouchableOpacity>

                        <Text style={styles.text_title}>
                            {cidadeDestino}
                        </Text>
                    </View>

                    <Text style={styles.text_label}>
                        {"Embarque"}
                    </Text>
                    <Text style={styles.text_value}>
                        {nomePontoOrigem}
                    </Text>

                </View>
            </View>

            <TouchableOpacity
                onPress={() => { onClickNew(id) }}
            >
                <LinearGradient
                    colors={['#008000', '#008000']}
                    style={styles.button}
                >
                    <View style={styles.container2}>
                        <Text style={[styles.button_text, {
                            color: '#fff'
                        }]}>Realizar Checkin</Text>
                    </View>
                </LinearGradient>
            </TouchableOpacity>



        </View>

    );
}

const styles = StyleSheet.create({
    container_cidade: {
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 10,
        flexDirection: 'row',
    },

    container: {
        marginTop: 15,
        marginBottom: 12,
        flexDirection: 'row',
    },
    icon: {
        marginTop: 45,
        marginLeft: 9,
        marginRight: 5,
    },
    icon_cidades: {
        marginTop: -3,
        marginBottom: 0,
        marginLeft: 10,
        marginRight: 10,
    },

    text_title: {
        marginLeft: 5,
        marginTop: -5,
        marginBottom: 5,
        fontSize: 15,
        color: '#1C1C1C'

    },
    text_label: {
        marginLeft: 5,
        marginTop: -5,
        marginBottom: 5,
        marginLeft: 15,
        fontSize: 15,
        color: 'gray'

    },

    text_value: {
        marginLeft: 5,
        marginTop: -5,
        marginBottom: 5,
        marginLeft: 15,
        fontSize: 15,
        color: 'slategray'
    },
    text_horario: {
        marginLeft: 5,
        marginTop: -5,
        marginBottom: 5,
        fontSize: 15,
        color: 'slategray'
    },


    button: {
        paddingVertical: 3,
        borderRadius: 15,
        backgroundColor: 'white',
        alignSelf: "center",
        marginVertical: "1%",
        marginTop: -1,
        marginBottom: 17,
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
});
