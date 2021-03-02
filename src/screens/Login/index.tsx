import React, { useCallback, useState } from 'react';

import { LogoImg, SafeAreaContainer, ContainerScrollView, Container, CardForm, TitleForm, InputForm, ButtonSubmit, ButtonSubmitText, LinkForm, LinkFormText } from './styles';

import { useDispatch } from 'react-redux';

import { Feather } from '@expo/vector-icons';
import Loader from '../../components/Loader';

import GamaLogo from '../../assets/logo.png';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { sign_in } from '../../store/user/actions';
import { UserResponse } from '../../types/User';
import { useToast } from 'react-native-styled-toast'

const Login: React.FC = () => {
  const { toast } = useToast();
  const navigator = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleGoForgetPassword = useCallback(() => {
    navigator.navigate('ForgetPassword');
  }, [navigator]);
  const handleGoRegister = useCallback(() => {
    navigator.navigate('Register');
  }, [navigator]);

  const handleGoHome = useCallback(async () => {
    setLoading(true);
    try {
      const { data: response } = await api.post<UserResponse>('login', {
        usuario: username,
        senha: password,
      });

      await AsyncStorage.setItem('@token_user', response.token);
      await AsyncStorage.setItem('@user_name', response.usuario.nome);

      dispatch(sign_in({
        login: response.usuario.login,
        name: response.usuario.nome,
        token: response.token,
      }))
      toast({ message: 'Seja bem vindo(a)!' });
      navigator.navigate('Dashboard');
    } catch (err) {
      toast(
        { 
          message: 'Usuário ou senha incorretos!', 
          color: 'error', 
          iconColor: 'error', 
          accentColor: 'error', 
          iconName: 'x' 
        });
    } finally {
      setLoading(false);
    }

  }, [navigator, username, password]);

  return (
    <ContainerScrollView>
      <SafeAreaContainer>
        <Container>
          <LogoImg
            source={GamaLogo}
          />

          <CardForm>
            <TitleForm>Seja bem vindo, informe seus dados para logar.</TitleForm>
            <InputForm
              placeholder="Digite seu usuário"
              value={username}
              onChangeText={(text) => setUsername(text)}
            />
            <InputForm
              value={password}
              onChangeText={(text) => setPassword(text)}
              isLastChild
              secureTextEntry
              placeholder="Digite seu senha"
            />

            {loading ? (
              <Loader marginTop={34} />
            )
              : (
                <ButtonSubmit onPress={handleGoHome} >
                  <ButtonSubmitText>Continuar</ButtonSubmitText>
                  <Feather name="arrow-right" size={20} color="#fff" />
                </ButtonSubmit>
              )}

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