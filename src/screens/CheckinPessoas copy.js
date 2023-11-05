import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableWithoutFeedback, RefreshControl, TouchableOpacity, ScrollView } from "react-native";
import UserAvatar from 'react-native-user-avatar';
import { useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome'
import moment from 'moment-timezone';
import BoxInfo from '../components/BoxInfo';
import BoxInfoButton from '../components/BoxInfoButton';
import ButtonRealizarCheckin from '../components/ButtonRealizarCheckin';

moment.localeData('pr-br')

const ListChats = ({ checkin, checkins, onClick, onRefresh, refreshing, onClickVerListaPresenca }) => {
    const { colors } = useTheme();
    const formatdate = (date) => {
        var d = moment(date)
        return d.format('LLL')
    }


    function Item({ item }) {
        console.log('Item: ', item)
        return (
            <TouchableWithoutFeedback>
                <View style={styles.listItem}>
                    <UserAvatar size={30} name={item.user.name} bgColors={['#007bb6']} />
                    <View style={{ alignItems: "center", flex: 1 }}>
                        <Text style={{ fontWeight: "bold", alignSelf: "flex-start", marginLeft: 10, marginTop: 5 }}>{item.user.name}</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    }

    return (
        <>
            <BoxInfo
                top={9}
                icon={'calendar'}
                text1={'Data'}
                text2={checkin.data}
            />

            <BoxInfo
                top={0}
                icon={'bus'}
                text1={'Linha'}
                text2={checkin.nome}
            />

            <BoxInfo
                top={0}
                icon={'sign-in'}
                text1={'Ponto de embarque'}
                text2={'xxxxxxxxxxxxxxxxxxxxx'}
            />

            <BoxInfo
                top={0}
                icon={'sign-out'}
                text1={'Ponto de desembarque'}
                text2={'yyyyyyyyyyyyyyyyyy'}
            />

            <BoxInfo
                top={0}
                icon={'check-square'}
                text1={'Check-ins já realizados'}
                text2={checkins.length + '/' + '45'}
            />

            <BoxInfoButton
                top={0}
                icon={'users'}
                text1={'Ver lista de presença'}
                onClick={onClickVerListaPresenca}
            />

            {checkins.length == 0 ?
                <>
                    <ButtonRealizarCheckin
                        text={'Fazer check-in'}
                        onClick={onClick}
                        top={0}
                    />
                </>
                :
                <FlatList
                    style={{ flex: 1 }}
                    data={checkins}
                    renderItem={({ item }) => <Item item={item} />}
                    keyExtractor={item => item.id.toString()}
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                        />
                    }
                />
            }

            <ButtonRealizarCheckin
                text={'Fazer check-in'}
                onClickVerListaPresenca={onClickVerListaPresenca}
                top={0}
            />
        </>
    )
};

export default ListChats;

const styles = StyleSheet.create({
    InfBox2: {
        flex: 0,
        borderRadius: 5,
        height: -200,
        margin: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
        backgroundColor: 'white',
    },
    InfBox3: {
        flexDirection: 'row',
    },
    icon: {
        marginTop: 18,
        marginLeft: 10,
        marginRight: 10,
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
        marginTop: 0,
        fontSize: 15,
        color: '#696969'
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

    InfBox: {
        flex: 1,
        backgroundColor: 'white',
        margin: '1%',
        borderRadius: 15

    }
});
