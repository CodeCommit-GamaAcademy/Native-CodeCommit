import React, { useCallback, useRef, useState } from 'react';
import { TextInput } from 'react-native';
import { useDispatch } from 'react-redux';
import { Feather } from '@expo/vector-icons';
import { useToast } from 'react-native-styled-toast'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import * as yup from 'yup';
import getValidationErrors from '../../utils/getValidationErrors';

import GamaLogo from '../../assets/logo.png';

import { UserResponse } from '../../types/user';
import { sign_in } from '../../store/user/actions';
import api from '../../services/api';
import Loader from '../../components/Loader';
import Input from '../../components/Input';
import { LogoImg, SafeAreaContainer, ContainerScrollView, Container, CardForm, TitleForm, InputForm, ButtonSubmit, ButtonSubmitText, LinkForm, LinkFormText } from './styles';
import updateStore from '../../services/updateStore';


interface SignInFormData {
  username: string;
  password: string;
}
const Login: React.FC = () => {
  const { toast } = useToast();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const navigator = useNavigation();
  const formRef = useRef<FormHandles>(null);
  const passwordInputRef = useRef<TextInput>(null);

  const handleGoForgetPassword = useCallback(() => {
    navigator.navigate('ForgetPassword');
  }, [navigator]);
  const handleGoRegister = useCallback(() => {
    navigator.navigate('Register');
  }, [navigator]);

  const handleGoHome = useCallback(async (data: SignInFormData) => {
    setLoading(true);
    try {
      formRef.current?.setErrors({});

      const schema = yup.object().shape({
        username: yup.string().required('Nome de usuário obrigatório'),
        password: yup.string().required('Senha obrigatória'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      const { data: response } = await api.post<UserResponse>('login', {
        usuario: data.username,
        senha: data.password,
      });

      await AsyncStorage.setItem('@token_user', response.token);
      await AsyncStorage.setItem('@user_data', JSON.stringify({
        name: response.usuario.nome,
        cpf: response.usuario.cpf
      }));

      await updateStore();

      toast({ message: 'Seja bem vindo(a)!' });
      navigator.navigate('Dashboard');
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
      }
      toast({
        message: 'Usuário ou senha incorretos!',
        color: 'error',
        iconColor: 'error',
        accentColor: 'error',
        iconName: 'x'
      });
    } finally {
      setLoading(false);
    }
  }, [navigator]);

  return (
    <ContainerScrollView>
      <SafeAreaContainer>
        <Container>
          <LogoImg
            source={GamaLogo}
          />

          <CardForm>
            <Form ref={formRef} onSubmit={handleGoHome}>
              <TitleForm>Seja bem vindo, informe seus dados para logar.</TitleForm>
              <Input
                autoCorrect={false}
                autoCapitalize="none"
                name="username"
                placeholder="Digite seu usuário"
                returnKeyType="next"
                onSubmitEditing={() => {
                  passwordInputRef.current?.focus();
                }}
              />

              <Input
                ref={passwordInputRef}
                name="password"
                autoCapitalize="none"
                placeholder="Digite sua senha"
                secureTextEntry
                returnKeyType="send"
                onSubmitEditing={() => {
                  formRef.current?.submitForm();
                }}
              />

              {loading ? (
                <Loader marginTop={34} />
              )
                : (
                  <ButtonSubmit onPress={() => {
                    formRef.current?.submitForm(); // inicialmente formRef estará null
                  }} >
                    <ButtonSubmitText>Continuar</ButtonSubmitText>
                    <Feather name="arrow-right" size={20} color="#fff" />
                  </ButtonSubmit>
                )}
            </Form>

            <LinkForm onPress={handleGoForgetPassword} >
              <LinkFormText>Esqueci minha senha</LinkFormText>
              <Feather name="arrow-right" size={20} color="#8c52e5" />
            </LinkForm>
            <LinkForm onPress={handleGoRegister} isLastChild={true}>
              <LinkFormText>Ainda não sou cliente</LinkFormText>
              <Feather name="arrow-right" size={20} color="#8c52e5" />
            </LinkForm>
          </CardForm>
        </Container>
      </SafeAreaContainer>
    </ContainerScrollView>
  );
}

export default Login; 