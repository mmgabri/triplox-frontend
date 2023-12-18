import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, FlatList, LinearGradient } from "react-native";
import { useTheme } from 'react-native-paper';
import UserAvatar from 'react-native-user-avatar';
import { addDays, subDays, format, getDate, isSameDay, startOfWeek, sub, parse, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { useAuth } from '../../contexts/auth';
import Icon from 'react-native-vector-icons/FontAwesome'
import { SeparatorItemFlatList } from '../../components/SeparatorItemFlatList';

const FeedItem = ({ feedsData, onRefresh, isRefreshing, onClickDelete }) => {
    const { user, isAuthenticated, _showAlert } = useAuth();
    const { colors } = useTheme();

    console.log('---- FeedItem --->>', feedsData)

    const formatDateTime = (date) => {
        console.log('------------------------formatDate: ', date)
        data = format(parseISO(date), "dd' 'MMM' 'yyyy", { locale: ptBR })
        hora = format(parseISO(date), "HH':'mm", { locale: ptBR })

        return data + ' - ' + hora;
    }


    function Item({ item }) {
        return (
            <View marginTop={-12}>

                <View style={styles.listItem}>
                    <View marginTop={19}>
                        <UserAvatar size={30} name={item.user.name} bgColors={['#007bb6']} />
                    </View>
                    <View style={{ alignItems: "center", flexDirection: "row" }}>
                        <View style={{ alignItems: "center", flexDirection: "column" }}>
                            <Text style={{ fontWeight: "bold", alignSelf: "flex-start", marginLeft: 10, marginTop: 5, color: 'gray', fontSize: 16 }}>{item.user.name}</Text>
                            <Text style={{ alignSelf: "flex-start", marginLeft: 10, marginTop: 1, color: 'gray', fontSize: 12 }}>{formatDateTime(item.createAt)}</Text>
                        </View>
                        {item.user.id == user.id &&
                            <View style={{ marginTop: -40, marginLeft: 20 }}>
                                <TouchableOpacity style={styles.icon} onPress={() => { onClickDelete(item.id) }}>
                                    <Icon name="trash" marginTop={-5} marginLeft={10} size={20} color="#A52A2A" />
                                </TouchableOpacity>
                            </View>
                        }
                    </View>
                </View>
                <View style={styles.listItem2}>
                    <Text style={{ alignSelf: "flex-start", marginLeft: 10, marginTop: 5, color: 'gray', fontSize: 13 }}>{item.mensagem}</Text>
                </View>

            </View>
        );
    }

    return (

        <FlatList
            ListHeaderComponent={SeparatorItemFlatList}
            ItemSeparatorComponent={SeparatorItemFlatList}
            style={styles.textBox1}
            data={feedsData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <Item item={item} />}
            onRefresh={onRefresh}
            refreshing={isRefreshing}
        />
    );
}

export default FeedItem;

const styles = StyleSheet.create({
    textBox1: {
        margin: 5,
        backgroundColor: 'whitesmoke'

    },
    listItem: {
        borderLeftColor: "blue",
        margin: 5,
        padding: 5,
        backgroundColor: "#FFF",
        width: "100%",
        flex: 1,
        alignSelf: "center",
        flexDirection: "row",
        borderRadius: 2,
    },

    listItem2: {
        borderLeftColor: "blue",
        marginTop: -7,
        marginBottom: 15,
        padding: 5,
        backgroundColor: "#FFF",
        width: "100%",
        flex: 1,
        alignSelf: "center",
        flexDirection: "row",
        borderRadius: 2,
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
