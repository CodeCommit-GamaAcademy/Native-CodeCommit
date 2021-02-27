import React, { useCallback } from 'react';
import { Image } from 'react-native';
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';

import { Container, Card, Title, InputContainer, Input, Button, ButtonText, ButtonLoginText, ButtonLogin  } from './styles';

import logo from '../../assets/logo.png';

const ForgotPassword: React.FC = () => {
    const navigator = useNavigation();

    const handleGoLogin = useCallback(() => {
        navigator.navigate('Login');
    }, [ navigator ]);
    
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
            <ButtonLogin onPress={ handleGoLogin } >
                <ButtonLoginText>Ir para login &gt;</ButtonLoginText>
            </ButtonLogin>
        </Card>
      </Container>
  );
}

export default ForgotPassword;