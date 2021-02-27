import React from 'react';
import { View, Text, Image } from 'react-native';
import { Feather } from '@expo/vector-icons'

import { Container, Card, Title, InputContainer, Input, Button, ButtonText, ButtonLoginText, ButtonLogin  } from './styles';

import logo from '../../assets/logo.png';

const ForgotPassword: React.FC = () => {
  return (
      <Container>
          <Image source={logo} />
        <Card>
            <Title>Redefinir senha</Title>
            <InputContainer>
                <Input placeholder="Nome de usuário" />
                <Input placeholder="Nova senha" />
                <Input placeholder="Confirmar nova senha"/>
                <Button>
                    <ButtonText>Continuar</ButtonText>
                    <Feather name="arrow-right" size={20} color="#fff" />
                </Button>
            </InputContainer>
                <ButtonLogin>
                    <ButtonLoginText>Ir para login &gt;</ButtonLoginText>
                </ButtonLogin>
        </Card>
      </Container>
  );
}

export default ForgotPassword;