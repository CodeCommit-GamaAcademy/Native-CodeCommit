import React from 'react';
import { Text } from 'react-native';

import { Container, CardForm, TitleForm, InputForm, ButtonSubmit } from './styles';

const Login: React.FC = () => {
  return (
    <Container>
      <CardForm>
        <TitleForm>Seja bem vindo, informe seus dados para logar.</TitleForm>
        <InputForm placeholder="Digite seu usuário" />
        <InputForm placeholder="Digite seu senha" />

        <ButtonSubmit>
          <Text>OI</Text>
        </ButtonSubmit>
      </CardForm>
    </Container>

  );
}

export default Login; 