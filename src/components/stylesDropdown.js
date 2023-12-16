import { StyleSheet } from 'react-native'

const stylesCommon = StyleSheet.create({

    titContainer: {
        marginTop: 0,
        marginBottom: 1

    },
    titText: {
        marginLeft: 5,
        marginTop: 10,
        marginBottom: 5,
        fontSize: 14,
        color: '#1C1C1C'

    },
    titText2: {
        marginLeft: 5,
        marginTop: 20,
        marginBottom: -25,
        fontSize: 16,
        color: '#1C1C1C'
    },

    dropdown: {
        height: 45,
        borderColor: '#A9A9A9',
        borderWidth: 1.5,
        borderRadius: 8,
        paddingHorizontal: 8,
        marginTop: 40,
        marginBottom: 10,
        marginLeft: 1,
        marginRight: 1,
        color: 'red'
    },
    icon: {
        marginRight: 15,
    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    placeholderStyle: {
        fontSize: 16,
        color: 'gray'
    },
    itemTextStyle:{
        color: 'gray'
    },
    selectedTextStyle: {
        fontSize: 16,
        color: 'gray'
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
        color:'gray'

    },


});


export default stylesCommon;