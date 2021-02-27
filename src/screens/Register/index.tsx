import React, { useCallback, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Feather } from '@expo/vector-icons';

import { SafeAreaContainer, ScrollContainer, Container, FormContainer, Logo, FormTitle, FormInput, SubmitButton, SubmitText, SubmitTextWrapper, ReturnLink, ReturnText } from './styles';
import Loader from '../../components/Loader';

import LogoImg from '../../assets/logo.png';
import { Platform } from 'react-native';
import api from '../../services/api';

const Register: React.FC = () => {
    const navigator = useNavigation();

    const [cpf, setCpf] = useState('');
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const [isFilled, setIsFilled] = useState(true);

    const handleGoLogin = useCallback(() => {
        navigator.navigate('Login');
    }, [navigator]);

    const handleSubmit = useCallback(async () => {
        setLoading(true);
        // Validate TODO
        if (password !== confirmPassword) {
            return;
        }

        try {
            const { status } = await api.post('/usuarios', {
                "cpf": cpf,
                "login": username,
                "nome": name,
                "senha": password,
            });

            if (status === 200 || status === 201) {
                const { data } = await api.post<{ token: string, usuario: { nome: string } }>('/login', {
                    "usuario": username,
                    "senha": password
                });

                await AsyncStorage.setItem('@token_user', data.token);
                await AsyncStorage.setItem('@user_name', data.usuario.nome);


                navigator.navigate('Dashboard');
            } else {
                console.log('error');
            }
        } catch (err) {
            console.log(err.response);
        } finally {
            setLoading(false);
        }
    }, [cpf, username, name, password, confirmPassword, navigator]);

    return (
        <SafeAreaContainer>
            <ScrollContainer>

                <Container
                    enabled={Platform.OS === 'ios'}
                    behavior="padding"
                >
                    <Logo source={LogoImg} />
                    <FormContainer>
                        <FormTitle>Peça sua conta e cartão de crédito do Gama Bank</FormTitle>

                        <FormInput
                            placeholder="Digite seu CPF"
                            onChangeText={text => setCpf(text)}
                            value={cpf}
                        />
                        <FormInput
                            placeholder="Escolha um nome de usuário"
                            onChangeText={text => setUsername(text)}
                            value={username}
                        />
                        <FormInput
                            placeholder="Nome completo"
                            onChangeText={text => setName(text)}
                            value={name}
                        />
                        <FormInput
                            placeholder="Digite sua senha"
                            onChangeText={text => setPassword(text)}
                            value={password}
                            secureTextEntry
                        />
                        <FormInput
                            placeholder="Confirme sua senha"
                            onChangeText={text => setConfirmPassword(text)}
                            value={confirmPassword}
                            secureTextEntry
                        />

                        {loading ? (
                            <Loader marginTop={9} />
                        ) : (
                                <SubmitButton
                                    isActive={isFilled}
                                    onPress={handleSubmit}
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
                    </FormContainer>
                </Container>
            </ScrollContainer>
        </SafeAreaContainer>
    );
}

export default Register;