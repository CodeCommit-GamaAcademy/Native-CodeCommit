import React from 'react';
import { Text } from 'react-native';
import { Container, Title, Value, Paragraph } from '../Balance/style';

// import { Container } from './styles';

const Balance: React.FC = () => {
  return (
    <Container>
      <Title>Saldo da Conta</Title>
      <Value>R$: 1.890,00</Value>
      <Paragraph>Lançamentos de débito: R$ 22,50</Paragraph>
    </Container>
  );
}

export default Balance;