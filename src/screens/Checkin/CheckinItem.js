import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, FlatList, StatusBar, ScrollView, } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'
import { useTheme } from 'react-native-paper';
import * as Animatable from 'react-native-animatable';

import LinearGradient from 'react-native-linear-gradient';
import { CheckinSeparatorItem } from './CheckinSeparatorItem';

console.log('========= CheckinItem ===============')

const CheckinItem = ({ trajetosData, onClickNew, onClickCancel, onClickCheckinsRealizados, onRefresh, isRefreshing }) => {

    function Item({ item }) {
        return (
            <View>
                <View style={styles.container}>
                    {item.checkinRealizado ?
                        <TouchableOpacity style={styles.icon} >
                            <Icon name="chevron-circle-down" marginTop={-20} marginLeft={1} size={22} color="seagreen" />
                        </TouchableOpacity>
                        :
                        <TouchableOpacity style={styles.icon} >
                            <Icon name="chevron-circle-down" marginTop={-20} marginLeft={1} size={22} color="gray" />
                        </TouchableOpacity>
                    }

                    <View>

                        <View style={styles.container_cidade}>

                            <Text style={styles.text_title}>
                                {"Linha Indaiatuba x São Bernardo"}
                            </Text>


                        </View>


                        <View style={styles.container_cidade}>
                            <Text style={styles.text_title}>
                                {item.cidadeOrigem}
                            </Text>
                            <TouchableOpacity style={styles.icon_cidades} >
                                <Icon name="arrow-circle-right" marginLeft={0} marginRight={-2} size={21} color="gray" />
                            </TouchableOpacity>

                            <Text style={styles.text_title}>
                                {item.cidadeDestino}
                            </Text>
                            <View style={styles.container3} >
                                <TouchableOpacity alignItems={"right"} style={styles.icon_cidades} onPress={() => { onClickCheckinsRealizados(item.linhaId, item.sentido) }} >
                                    <Icon name="users" marginLeft={20} marginRight={-9} size={17} color="slateblue" />
                                </TouchableOpacity>
                                <Text style={styles.text_qtd}>{item.quantidadeCheckinEfetuadoTrajeto}/{item.quantidadeVagasLinha}</Text>
                            </View>
                        </View>

                        <Text style={styles.text_label}>
                            {"Embarque previsto as 05:00"}
                        </Text>
                        <Text style={styles.text_value}>
                            {item.nomePontoOrigem}
                        </Text>

                    </View>
                </View>

                {item.checkinRealizado ?

                    <TouchableOpacity
                        onPress={() => { onClickCancel(item.checkinId) }}
                    >
                        <LinearGradient
                            colors={['firebrick', 'firebrick']}
                            style={styles.button}
                        >
                            <View style={styles.container2}>
                                <Text style={[styles.button_text, {
                                    color: '#fff'
                                }]}>Cancelar Check-in</Text>
                            </View>
                        </LinearGradient>
                    </TouchableOpacity>

                    :

                    <TouchableOpacity
                        onPress={() => { onClickNew(item.id, item.linhaId, item.sentido) }}
                    >
                        <LinearGradient
                            colors={['seagreen', 'seagreen']}
                            style={styles.button}
                        >
                            <View style={styles.container2}>
                                <Text style={[styles.button_text, {
                                    color: '#fff'
                                }]}>Fazer Check-in</Text>
                            </View>
                        </LinearGradient>
                    </TouchableOpacity>

                }
            </View>
        );
    }

    return (

        <FlatList
            style={styles.textBox1}
            ItemSeparatorComponent={CheckinSeparatorItem}
            data={trajetosData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <Item item={item} />}
            onRefresh={onRefresh}
            refreshing={isRefreshing}
        />
    );
}


export default CheckinItem;

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
    container3: {
        flexDirection: "row"
        
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
        color: '#1C1C1C',
        fontWeight: '500'

    },
    text_qtd: {
        alignItems: "flex-end",
        marginLeft: 5,
        marginTop: -3,
        marginBottom: 5,
        fontSize: 14,
        fontWeight: "500",
        color: 'slateblue',


    },
    text_label: {
        marginLeft: 5,
        marginTop: -5,
        marginBottom: 5,
        marginLeft: 15,
        fontSize: 14,
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
        borderRadius: 7,
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
