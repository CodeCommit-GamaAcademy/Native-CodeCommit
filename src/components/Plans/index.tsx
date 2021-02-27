import React from 'react';
import { View } from 'react-native';
import { Container, Line, Paragraph, Title, Value, ValueNegative } from './style';


const Plans: React.FC = () => {
  return (
    <Container>
      <Title>Planos de conta</Title>
      <Paragraph>Tipo do plano: Receita</Paragraph>
      <Value>R$: 1.890,00</Value>
      <Line></Line>
      <Paragraph>Tipo do plano: Despesas</Paragraph>
      <ValueNegative>- R$: 22,50</ValueNegative>
    </Container>
  );
}

export default Plans;