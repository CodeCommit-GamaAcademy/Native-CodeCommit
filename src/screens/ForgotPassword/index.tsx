import React, { useCallback, useRef, useState } from 'react';
import { Image, TextInput, View } from 'react-native';
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import { Platform } from 'react-native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import * as yup from 'yup';
import getValidationErrors from '../../utils/getValidationErrors';

import { Container, ScrollContainer, AvoidContainer, LogoImage, Card, Title, InputContainer, Button, ButtonText, ButtonLoginText, ButtonLogin } from './styles';

import logo from '../../assets/logo.png';
import Loader from '../../components/Loader';
import api from '../../services/api';
import { useToast } from 'react-native-styled-toast'
import Input from '../../components/Input';

interface UsernameFormData {
    username: string;
}

interface PasswordFormData {
    password: string;
    confirmPassword: string;
}

const ForgotPassword: React.FC = () => {
    const { toast } = useToast();
    const [username, setUsername] = useState('');
    const [isUsernameValid, setIsUsernameValid] = useState(false);
    const [temporaryPassword, setTemporaryPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const navigator = useNavigation();
    const formRefUsername = useRef<FormHandles>(null);
    const formRefPassword = useRef<FormHandles>(null);
    const confirmPasswordInputRef = useRef<TextInput>(null);

    const handleGoLogin = useCallback(() => {
        navigator.navigate('Login');
    }, [navigator]);

    const handleSubmitUsername = useCallback(async (dataProps: { username: string }) => {
        setLoading(true);
        try {
            formRefUsername.current?.setErrors({});

            const schema = yup.object().shape({
                username: yup.string().required('Nome de usuário obrigatório'),
            });

            await schema.validate(dataProps, {
                abortEarly: false,
            });

            const { status, data } = await api.post('/nova-senha', {
                "email": "email@email.com",
                "login": dataProps.username,
            });

            if (status === 200 || status === 201) {
                setTemporaryPassword(data);
                setIsUsernameValid(true);
                setUsername(dataProps.username);
            } else {
                throw new Error('username not found!');
            }
        } catch (err) {
            if (err instanceof yup.ValidationError) {
                const errors = getValidationErrors(err);
                formRefUsername.current?.setErrors(errors);
            }
            toast({
                message: 'Usuário não encontrado!',
                color: 'error',
                iconColor: 'error',
                accentColor: 'error',
                iconName: 'x'
            });
        } finally {
            setLoading(false);
        }
    }, []);

    const handleSubmitNewPassword = useCallback(async (dataProps: PasswordFormData) => {
        setLoading(true);
        try {
            formRefPassword.current?.setErrors({});

            const schema = yup.object().shape({
                password: yup.string().min(6, 'No mínimo 6 digitos'),
                confirmPassword: yup.string().min(6, 'No mínimo 6 digitos')
            });

            await schema.validate(dataProps, {
                abortEarly: false
            });

            if (dataProps.password !== dataProps.confirmPassword) {
                toast({
                    message: 'As senhas devem ser iguais!',
                    color: 'error',
                    iconColor: 'error',
                    accentColor: 'error',
                    iconName: 'x'
                });
                return;
            }

            const data = await api.post(`altera-senha?senhaTemporaria=${temporaryPassword}`, {
                "senha": dataProps.password,
                "usuario": username,
            });

            if (data.status === 200 || data.status === 201) {
                navigator.navigate('Login');
                toast({ message: 'Senha alterada com sucesso!' });
            } else {
                navigator.navigate('ForgetPassword');
            }
        } catch (err) {
            if (err instanceof yup.ValidationError) {
                const errors = getValidationErrors(err);
                formRefPassword.current?.setErrors(errors);
            }

            toast({
                message: 'Ocorreu algum erro!',
                color: 'error',
                iconColor: 'error',
                accentColor: 'error',
                iconName: 'x'
            });
        } finally {
            setLoading(false);
        }
    }, [username, temporaryPassword, navigator, toast]);

    return (
        <ScrollContainer>
            <Container>
                <AvoidContainer enabled={Platform.OS === 'ios'} behavior="padding">
                    <LogoImage source={logo} />
                    <Card>
                        <Title>Redefinir senha</Title>
                        {isUsernameValid ? (
                            <InputContainer>
                                <View>
                                    <Form ref={formRefPassword} onSubmit={handleSubmitNewPassword}>
                                        <Input
                                            autoCapitalize="none"
                                            name="password"
                                            placeholder="Digite sua senha"
                                            returnKeyType="next"
                                            secureTextEntry
                                            onSubmitEditing={() => {
                                                confirmPasswordInputRef.current?.focus();
                                            }}
                                        />

                                        <Input
                                            ref={confirmPasswordInputRef}
                                            name="confirmPassword"
                                            autoCapitalize="none"
                                            placeholder="Confirmar nova senha"
                                            secureTextEntry={true}
                                            returnKeyType="send"
                                            onSubmitEditing={() => {
                                                formRefPassword.current?.submitForm();
                                            }}
                                        />
                                        {loading ? (
                                            <Loader marginTop={30} />
                                        ) : (
                                                <Button onPress={() => {
                                                    formRefPassword.current?.submitForm();
                                                }}>
                                                    <ButtonText>Continuar</ButtonText>
                                                    <Feather name="arrow-right" size={20} color="#fff" />
                                                </Button>
                                            )}
                                    </Form>
                                </View>
                            </InputContainer>
                        ) : (
                                <InputContainer hasStyle>
                                    <Form ref={formRefUsername} onSubmit={handleSubmitUsername}>
                                        <Input
                                            name="username"
                                            autoCapitalize="none"
                                            placeholder="Nome de usuário"
                                            returnKeyType="send"
                                            onSubmitEditing={() => {
                                                formRefUsername.current?.submitForm();
                                            }}
                                        />
                                        {loading ? (
                                            <Loader marginTop={30} />
                                        ) : (
                                                <Button onPress={() => {
                                                    formRefUsername.current?.submitForm();
                                                }}>
                                                    <ButtonText>Continuar</ButtonText>
                                                    <Feather name="arrow-right" size={20} color="#fff" />
                                                </Button>
                                            )}
                                    </Form>

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