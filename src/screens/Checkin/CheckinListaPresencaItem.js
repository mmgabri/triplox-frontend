import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, FlatList, TouchableWithoutFeedback } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'
import { useTheme } from 'react-native-paper';
import * as Animatable from 'react-native-animatable';
import UserAvatar from 'react-native-user-avatar';

import LinearGradient from 'react-native-linear-gradient';
import { CheckinSeparatorItem } from './CheckinSeparatorItem';

console.log('========= CheckinItem ===============')

const CheckinListaPresencaItem = ({ checkinsData, onRefresh, isRefreshing }) => {
    const { colors } = useTheme();

    console.log('---- CheckinListaPresencaItem ---', checkinsData )

    function Item({ item }) {
        return (
            <View>
                <TouchableWithoutFeedback>
                    <View style={styles.listItem}>
                        <UserAvatar size={30} name={item.user.name} bgColors={['#007bb6']} />
                        <View style={{ alignItems: "center", flex: 1 }}>
                            <Text style={{ fontWeight: "bold", alignSelf: "flex-start", marginLeft: 10, marginTop: 5 }}>{item.user.name}</Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        );
    }

    return (

        <FlatList
            style={styles.textBox1}
            data={checkinsData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <Item item={item} />}
            onRefresh={onRefresh}
            refreshing={isRefreshing}
        />
    );
}

export default CheckinListaPresencaItem;

const styles = StyleSheet.create({
    textBox1: {
        margin: 15,

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
