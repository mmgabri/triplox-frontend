import React, { useState, useEffect } from 'react';
import { View, Text, StatusBar, ScrollView , StyleSheet} from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';
import * as Animatable from 'react-native-animatable';
import { useTheme } from 'react-native-paper';
import AwesomeLoading from 'react-native-awesome-loading';
import { decodeMessage } from '../services/decodeMessage'
import { useAuth} from '../contexts/auth';
import { api } from '../services/api';
import stylesCommon from '../components/stylesCommon'
import Button from '../components/Button';
import ButtonTransparent from '../components/ButtonTransparent';


const AnunciarConfirmScreen = ({ route, navigation }) => {
    const { updateUser} = useAuth();
    const [isLoading, setIsLoading] = useState(false);
    const { user, _showAlert } = useAuth();
    const { linha } = route.params;
    const { colors } = useTheme();

    useEffect(() => {
        console.log('---- useEffect - confirm ----', linha)

    }, [])

    function onError(error) {
        console.log("onError")
        const statusCode = error.response?.status;

        if (statusCode == 401) {
            _showAlert('info', 'Ooops!', decodeMessage(statusCode), 4000);
            navigation.navigate('SignInTab')
        }
        _showAlert('danger', 'Ooops!', decodeMessage(statusCode), 7000);
    }


    const salvarSetup = async () => {

        console.log("Linha========>" , linha)

        let setup = {
            linhaId: linha.id,
            tipoUser: linha.tipoUser,
            userId: user.id,
        }

        console.log("setup========>" , setup)

        setIsLoading(true);

        console.log('Chamando a api setup......', setup)
        api.post('/users/setup', setup)
            .then((response) => {
                console.info("api executada com sucesso", response.data)
                setIsLoading(false);
                user.tipoUser = setup.tipoUser
                user.linhaId = setup.linhaId
                console.log('User atualizado: ' , user)
                updateUser(user)
                _showAlert('success', "Obaa", 'Configurações salvas!', 3000);
                navigation.push('Checkin')
            })
            .catch((error) => {
                setIsLoading(false);
                console.error('Erro na chamada da api:', error)
                onError(error)
            });
    }


    return (

        isLoading ?
            < View >
                <AwesomeLoading indicatorId={8} size={50} isActive={true} text="" />
            </View >

            :

            <View style={stylesCommon.container}>
                <StatusBar backgroundColor='#009387' barStyle="light-content" />
                <ScrollView>
                    <Animatable.View
                        animation="fadeInUpBig"
                        style={[stylesCommon.footer, {
                            backgroundColor: colors.background
                        }]}
                    >
                        <Text style={[stylesCommon.text_footer, {
                            color: colors.text
                        }]}>Confirme os dados</Text>

                        <>
                            <View style={[stylesCommon.text_footer, { marginTop: 15 }]} >
                                <Text style={[styles.text_titulo_detail]}>Linha</Text>
                                <Text style={[stylesCommon.text_footer, {
                                    color: colors.text
                                }]}>{linha.nome}</Text>
                            </View>

                            <View style={[stylesCommon.text_footer, { marginTop: 15 }]} >
                                <Text style={[styles.text_titulo_detail]}>Tipo de usuário</Text>
                                <Text style={[stylesCommon.text_footer, {
                                    color: colors.text
                                }]}>{linha.tipoUser}</Text>
                            </View>

                        </>

                        <Button
                            text={'Salvar'}
                            onClick={salvarSetup}
                            top={40}
                        />

                        <ButtonTransparent
                            text={'Cancelar'}
                            onClick={() => navigation.push('Home')}
                            top={10}
                        />

                    </Animatable.View>

                </ScrollView>
            </View>
    )
}

export default AnunciarConfirmScreen;


const styles = StyleSheet.create({
    text_titulo_detail: {
        color: '#363636',
        fontWeight: 'bold',
        textAlign: 'left',
        fontSize: 18

    },
    imageViewContainer: {
        margin: 15,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

})