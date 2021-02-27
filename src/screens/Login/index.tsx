import React from 'react';

import { LogoImg, ContainerScrollView, Container, CardForm, TitleForm, InputForm, ButtonSubmit, ButtonSubmitText, LinkForm, LinkFormText } from './styles';

import { Feather } from '@expo/vector-icons';

import GamaLogo from '../../assets/logo.png';

const Login: React.FC = () => {
  return (
    // <ContainerScrollView>
    <Container>
      <LogoImg
        source={GamaLogo}
      />

      <CardForm>
        <TitleForm>Seja bem vindo, informe seus dados para logar.</TitleForm>
        <InputForm placeholder="Digite seu usuário" />
        <InputForm isLastChild={true} secureTextEntry={true} placeholder="Digite seu senha" />

        <ButtonSubmit>
          <ButtonSubmitText>Continuar</ButtonSubmitText>
          <Feather name="arrow-right" size={20} color="#fff" />
        </ButtonSubmit>
        <LinkForm>
          <LinkFormText>Esqueci minha senha</LinkFormText>
          <Feather name="arrow-right" size={20} color="#8c52e5" />
        </LinkForm>
        <LinkForm isLastChild={true}>
          <LinkFormText>Ainda não sou cliente</LinkFormText>
          <Feather name="arrow-right" size={20} color="#8c52e5" />
        </LinkForm>
      </CardForm>
    </Container>
    // </ContainerScrollView>
  );
}

export default Login; 