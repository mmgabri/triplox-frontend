import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, FlatList, StatusBar, ScrollView, } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'

import LinearGradient from 'react-native-linear-gradient';
import { SeparatorItemFlatList } from '../../components/SeparatorItemFlatList';

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
                        <View style={styles.container_item}>
                            <Text style={styles.text_title}>
                                {item.nomeLinha}
                            </Text>
                        </View>

                        <View marginTop={5} marginLeft={7} flexDirection="row">
                            <Text style={styles.text_title}>
                                {item.cidadeOrigem}
                            </Text>
                            <TouchableOpacity style={styles.icon_cidades} >
                                <Icon name="arrow-circle-right" marginBottom={3} marginLeft={0} marginRight={-10} size={20} color="gray" />
                            </TouchableOpacity>

                            <Text style={styles.text_title}>
                                {item.cidadeDestino}
                            </Text>
                        </View>
                        <View marginTop={5} flexDirection="row">
                            <TouchableOpacity style={styles.icon_cidades} >
                                <Icon name="sign-in" marginBottom={3} marginLeft={0} marginRight={-10} size={20} color="gray" />
                            </TouchableOpacity>

                            <Text style={styles.text_value}>
                                {item.nomePontoOrigem} - {item.horarioPrevistoEmbarquePontoOrigem} hrs
                            </Text>
                        </View>

                        <View marginTop={5} flexDirection="row">
                            <TouchableOpacity style={styles.icon_cidades} >
                                <Icon name="sign-out" marginBottom={3} marginLeft={0} marginRight={-10} size={20} color="gray" />
                            </TouchableOpacity>

                            <Text style={styles.text_value}>
                                {item.nomePontoDestino}
                            </Text>
                        </View>
                    </View>
                </View>

                <View marginTop={-75} marginBottom={38} marginRight={4} alignSelf={"flex-end"} flexDirection={"column"} >
                    <TouchableOpacity alignSelf="center" onPress={() => { onClickCheckinsRealizados(item.linhaId, item.sentido, item.nomeLinha, item.cidadeOrigem, item.cidadeDestino) }} >
                        <Icon name="users" size={17} color="dodgerblue" marginLeft={3}/>
                        <Text  style={styles.text_qtd}>{item.quantidadeCheckinEfetuadoTrajeto}/{item.quantidadeVagasLinha}</Text>
                    </TouchableOpacity>
                </View>


                {item.checkinRealizado ?

                    <TouchableOpacity
                        onPress={() => { onClickCancel(item.checkinId) }}
                    >
                        <LinearGradient
                            colors={['firebrick', 'firebrick']}
                            style={styles.button}
                        >
                            <View style={styles.container_button}>
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
                            <View style={styles.container_button}>
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
            ListHeaderComponent={SeparatorItemFlatList}
            style={styles.textBox1}
            ItemSeparatorComponent={SeparatorItemFlatList}
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
    container_item: {
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 7,
        flexDirection: "row"
    },

    container: {
        marginTop: 10,
        marginBottom: 12,
        flexDirection: "row"
    },

    icon: {
        marginTop: 45,
        marginLeft: 7,
        marginRight: 0,
    },
    icon_cidades: {
        marginTop: -3,
        marginBottom: 0,
        marginLeft: 10,
        marginRight: 10,
    },

    text_title: {
        marginLeft: 7,
        marginTop: -5,
        marginBottom: -3,
        fontSize: 15,
        color: 'gray',
        fontWeight: '500'

    },
    text_qtd: {
        marginLeft: 0,
        marginTop: 1,
        marginRight: 7,
        fontSize: 14,
        fontWeight: "bold",
        color: 'dodgerblue',


    },

    text_value: {
        marginLeft: 5,
        marginTop: -4,
        marginBottom: 3,
        marginLeft: 15,
        fontSize: 15,
        color: 'gray',
        fontWeight: '500'
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

    container_button: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: 10,
    },

    button_text: {
        fontSize: 15,
        fontWeight: 'bold'
    },
});
