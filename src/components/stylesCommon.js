import { StyleSheet } from 'react-native'

const stylesCommon = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#993399',
    },
    loading: {
        flex: 1,
        backgroundColor: '#993399',
    },

    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30,

    },

    footer_cust: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingTop: 20,
        paddingHorizontal: 20,
        paddingVertical: 30,
        paddingBottom: 3000
        
    },

    text_footer: {
        color: '#05375a',
        fontSize: 18
    },

    text_checkin: {
        color: '#ffffff',
        fontSize: 18
    },


    action: {
        flexDirection: 'row',
        marginTop: 30,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    infoMsg: {
        color: '#3c3b3c',
        fontSize: 14,
    },
    
    button: {
        alignItems: 'center',
        marginTop: 50
    },

    button_calendar1: {
        alignItems: 'center',
        marginRight: -10,
        marginTop: 10
    },

    button_calendar2: {
        alignItems: 'center',
        marginLeft: -10,
        marginTop: 10
    },

    button_styte: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },

    button_text: {
        fontSize: 18,
        fontWeight: 'bold'
    },

    center: {
        alignItems: 'center',
        marginTop: 50
    },



    container2: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 10,
    },
    weekDayText: {
        color: 'gray',
        marginBottom: 5,
    },
    label: {
        fontSize: 14,
        color: 'black',
        textAlign: 'center',
    },
    selectedLabel: {
        color: 'white',
    },
    touchable: {
        borderRadius: 20,
        padding: 7.5,
        height: 35,
        width: 35,
    },
    selectedTouchable: {
        backgroundColor: 'seagreen',
    },
    weekDayItem: {
        alignItems: 'center',
    },

    container3: {
        flex: 1,
        backgroundColor: '#993399'
    },

    footer2: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_footer2: {
        color: '#05375a',
        fontSize: 18
    },
    action2: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    safe: {
        flex: 1,
    },
   

});

export default stylesCommon;