import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, FlatList, Button, SafeAreaView, ScrollView, } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'

import LinearGradient from 'react-native-linear-gradient';
import { SeparatorItemFlatList } from '../../components/SeparatorItemFlatList';
import stylesCommon from '../../components/stylesCommon'

const TrajetoItems = ({ trajetosData, onClickNew, onClickDelete, onRefresh, isRefreshing }) => {

    function Item({ item }) {
        return (
            <View>
                <View style={styles.container}>
                    <TouchableOpacity style={styles.icon} onPress={() => { onClickDelete(item.id) }}>
                        <Icon name="remove" marginTop={-10} marginLeft={15} size={22} color="#A52A2A" />
                        <Text style={styles.excluir} >excluir</Text>
                    </TouchableOpacity>
                    <View>
                        <View marginTop={8} marginBottom={8} flexDirection="row">
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

                        <View style={[styles.container_item, {marginTop:0}]}>
                            <Text style={styles.text_title2}>
                                {item.nomeLinha}
                            </Text>
                        </View>

                        <View marginTop={5} flexDirection="row">
                            <TouchableOpacity style={styles.text_title2} >
                                <Icon name="sign-in" marginBottom={3} marginLeft={0} marginRight={-14} size={20} color="gray" />
                            </TouchableOpacity>

                            <Text style={styles.text_title2}>
                                {item.nomePontoOrigem} - {item.horarioPrevistoEmbarquePontoOrigem} hrs
                            </Text>
                        </View>

                        <View marginTop={5} flexDirection="row">
                            <TouchableOpacity style={styles.text_title2} >
                                <Icon name="sign-out" marginBottom={3} marginLeft={0} marginRight={-14} size={20} color="gray" />
                            </TouchableOpacity>

                            <Text style={[styles.text_title2, {marginBottom:15}]}>
                                {item.nomePontoDestino}
                            </Text>
                        </View>



                    </View>
                </View>

            </View>
        );
    }


    return (

        <SafeAreaView style={styles.wrapper}>
            <View style={styles.grow}>
                <FlatList
                    ItemSeparatorComponent={SeparatorItemFlatList}
                    style={styles.flatList}
                    data={trajetosData}
                    renderItem={({ item }) => <Item item={item} />}
                    keyExtractor={(item) => item.id}
                    onRefresh={onRefresh}
                    refreshing={isRefreshing}
                />
            </View>
            <TouchableOpacity
                onPress={() => { onClickNew() }}
            >
                <LinearGradient
                    colors={['#BA4DE3', '#BA4DE3']}
                    style={styles.button}
                >
                    <View style={styles.container_button}>
                        <Text style={[styles.button_text, {
                            color: '#fff'
                        }]}>Adicionar Trajeto</Text>
                    </View>
                </LinearGradient>
            </TouchableOpacity>

        </SafeAreaView>






    );
}


export default TrajetoItems;

const styles = StyleSheet.create({
    container_item: {
        marginTop: 5,
        marginBottom: 5,
        flexDirection: "row"
    },

    container: {
        marginTop: 25,
        marginBottom: 12,
        flexDirection: "row",
        backgroundColor: "white"
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
        marginLeft: 17,
        marginTop: -5,
        marginBottom: 0,
        fontSize: 18,
        color: 'gray',
        fontWeight: 'bold'
    },
    text_title2: {
        marginLeft: 25,
        marginTop: -5,
        marginBottom: 0,
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
        marginTop: -4,
        marginBottom: 3,
        marginLeft: 12,
        fontSize: 15,
        color: 'gray',
        fontWeight: '500'
    },

    button: {
        paddingVertical: 3,
        paddingHorizontal: 80,
        borderRadius: 7,
        backgroundColor: 'white',
        alignSelf: "center",
        marginVertical: "1%",
        marginTop: 0,
        marginBottom: 7,
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
    excluir: {
        fontSize: 13,
        fontWeight: '400',
        color: "#A52A2A",
        marginLeft: 7

    },




    item: {
        margin: 5,
        borderBottom: "1px solid green"
    },
    wrapper: {
        flex: 1,
        backgroundColor: "white"
    },
    grow: {
        flex: 1,
        flexGrow: 1
    },
    footer: {
        backgroundColor: "#eee",
    },


});
