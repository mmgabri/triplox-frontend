import React from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'

export function TrajetoItem({ id, nomePontoOrigem, nomePontoDestino, cidadeOrigem, cidadeDestino, horarioPrevistoEmbarquePontoOrigem, onClick }) {
    return (

        <View style={styles.container}>
            <TouchableOpacity style={styles.icon} onPress={() => { onClick(id) }}>
                <Icon name="close" marginLeft={8} size={25} color="#FA8072" />
                <Text marginLeft={1}>excluir</Text>
            </TouchableOpacity>
            <View>
                <Text style={styles.text_title}>
                    {cidadeOrigem} x {cidadeDestino}
                </Text>
                <Text style={styles.text_label}>
                    {"Embarque"}
                </Text>
                <Text style={styles.text_value}>
                    {nomePontoOrigem}
                </Text>
                <Text style={styles.text_horario}>
                    {"Horário previso:" + horarioPrevistoEmbarquePontoOrigem}
                </Text>
                <Text style={styles.text_label}>
                    {"Desembarque"}
                </Text>
                <Text style={styles.text_value}>
                    {nomePontoDestino}
                </Text>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
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

    text_title: {
        marginLeft: 5,
        marginTop: 5,
        marginBottom: 5,
        fontSize: 17,
        color: '#1C1C1C'

    },
    text_label: {
        marginLeft: 5,
        marginTop: 5,
        marginBottom: 5,
        fontSize: 15,
        color: 'dimgray'

    },

    text_value: {
        marginLeft: 5,
        marginTop: -5,
        marginBottom: 5,
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
});
