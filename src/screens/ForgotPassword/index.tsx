import React, { useCallback, useState } from 'react';
import { Image } from 'react-native';
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import { Platform } from 'react-native';

import { Container, ScrollContainer, AvoidContainer, LogoImage, Card, Title, InputContainer, Input, Button, ButtonText, ButtonLoginText, ButtonLogin } from './styles';

import logo from '../../assets/logo.png';
import Loader from '../../components/Loader';
import api from '../../services/api';
import { useToast } from 'react-native-styled-toast'


const ForgotPassword: React.FC = () => {
    const { toast } = useToast();
    const [username, setUsername] = useState('');
    const [isValidUsername, setIsvalidUsername] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [temporaryPassword, setTemporaryPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const navigator = useNavigation();

    const handleGoLogin = useCallback(() => {
        navigator.navigate('Login');
    }, [navigator]);

    const handleSubmitUser = useCallback(async () => {
        setLoading(true);
        try {

            const { status, data } = await api.post('/nova-senha', {
                "email": "email@email.com",
                "login": username,
            });

            if (status === 200 || status === 201) {
                setTemporaryPassword(data);
                setIsvalidUsername(true);
            }
        } catch (err) {
            console.log(err);
            toast(
                { 
                  message: 'Usuário não encontrado!', 
                  color: 'error', 
                  iconColor: 'error', 
                  accentColor: 'error', 
                  iconName: 'x' 
                });
        } finally {
            setLoading(false);
        }
    }, [username]);

    const handleSubmitNewPassword = useCallback(async () => {
        setLoading(true);
        console.log(password, confirmPassword);
        try {
            if (password !== confirmPassword) {
                // Validation TO DO
                console.log('err');
                toast(
                    { 
                      message: 'As senhas não batem!', 
                      color: 'error', 
                      iconColor: 'error', 
                      accentColor: 'error', 
                      iconName: 'x' 
                    });
                return;
            }

            const data = await api.post(`altera-senha?senhaTemporaria=${temporaryPassword}`, {
                "senha": password,
                "usuario": username,
            });

            if (data.status === 200 || data.status === 201) {
                navigator.navigate('Login');
                toast({ message: 'Senha alterada com sucesso!' });
            } else {
                navigator.navigate('ForgetPassword');
            }
        } catch (err) {
            // Error TO DO 
            toast(
                { 
                  message: 'Ocorreu algum erro!', 
                  color: 'error', 
                  iconColor: 'error', 
                  accentColor: 'error', 
                  iconName: 'x' 
                });
        } finally {
            setLoading(false);
        }
    }, [password, confirmPassword]);

    return (
        <ScrollContainer>
            <Container>
                <AvoidContainer enabled={Platform.OS === 'ios'} behavior="padding">
                    <LogoImage source={logo} />
                    <Card>
                        <Title>Redefinir senha</Title>
                        {isValidUsername ? (
                            <InputContainer>
                                <Input secureTextEntry={true} placeholder="Nova senha" />
                                <Input secureTextEntry={true} placeholder="Confirmar nova senha" />
                                {loading ? (
                                    <Loader marginTop={30} />
                                ) : (
                                        <Button onPress={handleSubmitNewPassword}>
                                            <ButtonText>Continuar</ButtonText>
                                            <Feather name="arrow-right" size={20} color="#fff" />
                                        </Button>
                                    )}
                            </InputContainer>
                        ) : (
                                <InputContainer hasStyle>
                                    <Input onChangeText={(text) => setUsername(text)} placeholder="Nome de usuário" />
                                    {loading ? (
                                        <Loader marginTop={30} />
                                    ) : (
                                            <Button onPress={handleSubmitUser}>
                                                <ButtonText>Continuar</ButtonText>
                                                <Feather name="arrow-right" size={20} color="#fff" />
                                            </Button>
                                        )}

                                </InputContainer>
                            )}

                        <ButtonLogin onPress={handleGoLogin} >
                            <ButtonLoginText>Ir para login &gt;</ButtonLoginText>
                        </ButtonLogin>
                    </Card>
                </AvoidContainer>
            </Container>
        </ScrollContainer>
    );
}

export default ForgotPassword;