import React, { useCallback, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { Feather } from '@expo/vector-icons';

import { SafeAreaContainer, ScrollContainer, Container, FormContainer, Logo, FormTitle, FormInput, SubmitButton, SubmitText, SubmitTextWrapper, ReturnLink, ReturnText } from './styles';

import LogoImg from '../../assets/logo.png';
import { KeyboardAvoidingView, Platform } from 'react-native';

const Register: React.FC = () => {
    const navigator = useNavigation();

    const [cpf, setCpf] = useState('');
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [isFilled, setIsFilled] = useState(false);

    const handleGoLogin = useCallback(() => {
        navigator.navigate('Login');
    }, [ navigator ]);

    return (
        <SafeAreaContainer>
            <ScrollContainer>

                <Container
                    enabled={Platform.OS === 'ios'} 
                    behavior="padding"
                >
                    <Logo source={ LogoImg } />
                    <FormContainer>
                        <FormTitle>Peça sua conta e cartão de crédito do Gama Bank</FormTitle>

                        <FormInput 
                            placeholder="Digite seu CPF"
                            value={ cpf }
                            onChangeText={ text => setCpf(text) }
                        />
                        <FormInput 
                            placeholder="Escolha um nome de usuário"
                            value={ username }
                            onChangeText={ text => setUsername(text) }
                        />
                        <FormInput 
                            placeholder="Nome completo"
                            value={ name }
                            onChangeText={ text => setName(text) }
                        />
                        <FormInput 
                            placeholder="Digite sua senha"
                            value={ password }
                            onChangeText={ text => setPassword(text) }
                            secureTextEntry
                        />
                        <FormInput 
                            placeholder="Confirme sua senha"
                            value={ confirmPassword }
                            onChangeText={ text => setConfirmPassword(text) }
                            secureTextEntry
                        />

                        <SubmitButton
                            isActive={isFilled}
                        >
                            <SubmitTextWrapper>
                                <SubmitText isActive={ isFilled } >Continuar</SubmitText>
                                <Feather name="arrow-right" size={20} color={isFilled ? "#fff" : "#9B9B9B"} />
                            </SubmitTextWrapper>
                        </SubmitButton>

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