import React, { useCallback, useRef, useState } from 'react';
import { Platform, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useToast } from 'react-native-styled-toast';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import * as yup from 'yup';
import getValidationErrors from '../../utils/getValidationErrors';

import LogoImg from '../../assets/logo.png';

import api from '../../services/api';
import { SafeAreaContainer, ScrollContainer, Container, FormContainer, Logo, FormTitle, FormInput, SubmitButton, SubmitText, SubmitTextWrapper, ReturnLink, ReturnText } from './styles';
import Loader from '../../components/Loader';
import Input from '../../components/Input';

interface RegisterFormData {
    cpf: string;
    username: string;
    name: string;
    password: string;
    confirmPassword: string;
}

import { UserResponse } from '../../types/user';


const Register: React.FC = () => {
    const navigator = useNavigation();
    const { toast } = useToast();
    const [loading, setLoading] = useState(false);
    const [isFilled, setIsFilled] = useState(true);

    const handleGoLogin = useCallback(() => {
        navigator.navigate('Login');
    }, [navigator]);

    const formRef = useRef<FormHandles>(null);
    const usernameInputRef = useRef<TextInput>(null);
    const nameInputRef = useRef<TextInput>(null);
    const passwordInputRef = useRef<TextInput>(null);
    const confirmPasswordInputRef = useRef<TextInput>(null);

    const handleSubmit = useCallback(async (data: RegisterFormData) => {
        setLoading(true);
        try {
            formRef.current?.setErrors({});

            const schema = yup.object().shape({
                cpf: yup.string().min(14, 'Obrigatório ter 11 digitos'),
                username: yup.string().required('Nome de usuário obrigatório '),
                name: yup.string().required('Nome completo obrigatório'),
                password: yup.string().min(6, 'No mínimo 6 digitos'),
                confirmPassword: yup.string().min(6, 'No mínimo 6 digitos')
            });

            await schema.validate(data, {
                abortEarly: false
            });

            const { status } = await api.post('/usuarios', {
                "cpf": data.cpf,
                "login": data.username,
                "nome": data.name,
                "senha": data.password,
            });

            if (status === 200 || status === 201) {
                const { data: response } = await api.post<UserResponse>('/login', {
                    "usuario": data.username,
                    "senha": data.password
                });

                await AsyncStorage.setItem('@token_user', response.token);
                await AsyncStorage.setItem('@user_data', JSON.stringify({
                    name: response.usuario.nome,
                    cpf: response.usuario.cpf
                }));

                toast({ message: 'Usuário registrado com sucesso!' });
                navigator.navigate('RegisterSucceded');
            } else {
                toast({
                    message: 'Ocorreu algum erro!',
                    color: 'error',
                    iconColor: 'error',
                    accentColor: 'error',
                    iconName: 'x'
                });
            }

        } catch (err) {
            if (err instanceof yup.ValidationError) {
                const errors = getValidationErrors(err);
                formRef.current?.setErrors(errors);

                toast({
                    message: 'Ocorreu algum erro!',
                    color: 'error',
                    iconColor: 'error',
                    accentColor: 'error',
                    iconName: 'x'
                });
            }
        } finally {
            setLoading(false);
        }
    }, [navigator]);

    return (
        <SafeAreaContainer>
            <ScrollContainer>

                <Container
                    enabled={Platform.OS === 'ios'}
                    behavior="padding"
                >
                    <Logo source={LogoImg} />
                    <FormContainer>
                        <Form ref={formRef} onSubmit={handleSubmit}>
                            <FormTitle>Peça sua conta e cartão de crédito do Gama Bank</FormTitle>

                            <Input
                                autoCorrect={false}
                                autoCapitalize="none"
                                name="cpf"
                                keyboardType="numeric"
                                placeholder="Digite seu CPF"
                                returnKeyType="next"
                                onSubmitEditing={() => {
                                    usernameInputRef.current?.focus();
                                }}
                            />

                            <Input
                                ref={usernameInputRef}
                                autoCapitalize="none"
                                name="username"
                                placeholder="Escolha um nome de usuário"
                                returnKeyType="next"
                                onSubmitEditing={() => {
                                    nameInputRef.current?.focus();
                                }}
                            />

                            <Input
                                ref={nameInputRef}
                                autoCapitalize="words"
                                name="name"
                                placeholder="Nome completo"
                                returnKeyType="next"
                                onSubmitEditing={() => {
                                    passwordInputRef.current?.focus();
                                }}
                            />

                            <Input
                                ref={passwordInputRef}
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
                                autoCapitalize="none"
                                name="confirmPassword"
                                placeholder="Confirme sua senha"
                                returnKeyType="send"
                                secureTextEntry
                                onSubmitEditing={() => {
                                    formRef.current?.submitForm();
                                }}
                            />

                            {loading ? (
                                <Loader marginTop={9} />
                            ) : (
                                    <SubmitButton
                                        isActive={isFilled}
                                        onPress={() => {
                                            formRef.current?.submitForm();
                                        }}
                                        disabled={!isFilled}
                                    >
                                        <SubmitTextWrapper>
                                            <SubmitText isActive={isFilled} >Continuar</SubmitText>
                                            <Feather name="arrow-right" size={20} color={isFilled ? "#fff" : "#9B9B9B"} />
                                        </SubmitTextWrapper>
                                    </SubmitButton>
                                )}

                            <ReturnLink onPress={handleGoLogin} >
                                <ReturnText>&#60; Voltar para login</ReturnText>
                            </ReturnLink>
                        </Form>
                    </FormContainer>
                </Container>
            </ScrollContainer>
        </SafeAreaContainer>
    );
}

export default Register;