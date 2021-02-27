import React, { useCallback } from 'react';

import { LogoImg, SafeAreaContainer, ContainerScrollView, Container, CardForm, TitleForm, InputForm, ButtonSubmit, ButtonSubmitText, LinkForm, LinkFormText } from './styles';

import { Feather } from '@expo/vector-icons';

import GamaLogo from '../../assets/logo.png';
import { useNavigation } from '@react-navigation/native';

const Login: React.FC = () => {
  const navigator = useNavigation();

  const handleGoForgetPassword = useCallback(() => {
    navigator.navigate('ForgetPassword');
  }, [ navigator ]);
  const handleGoRegister = useCallback(() => {
    navigator.navigate('Register');
  }, [ navigator ]);

  const handleGoHome = useCallback(() => {
    navigator.navigate('Transferir')
  }, [navigator]);
  
  return (
    <SafeAreaContainer>
      <ContainerScrollView>
        <Container>
          <LogoImg
            source={GamaLogo}
          />

          <CardForm>
            <TitleForm>Seja bem vindo, informe seus dados para logar.</TitleForm>
            <InputForm placeholder="Digite seu usuário" />
            <InputForm isLastChild={true} secureTextEntry={true} placeholder="Digite seu senha" />

            <ButtonSubmit onPress={ handleGoHome } >
              <ButtonSubmitText>Continuar</ButtonSubmitText>
              <Feather name="arrow-right" size={20} color="#fff" />
            </ButtonSubmit>
            <LinkForm onPress={ handleGoForgetPassword } >
              <LinkFormText>Esqueci minha senha</LinkFormText>
              <Feather name="arrow-right" size={20} color="#8c52e5" />
            </LinkForm>
            <LinkForm onPress={ handleGoRegister } isLastChild={true}>
              <LinkFormText>Ainda não sou cliente</LinkFormText>
              <Feather name="arrow-right" size={20} color="#8c52e5" />
            </LinkForm>
          </CardForm>
        </Container>
      </ContainerScrollView>
    </SafeAreaContainer>
  );
}

export default Login; 