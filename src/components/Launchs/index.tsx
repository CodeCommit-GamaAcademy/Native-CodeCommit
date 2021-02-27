import React from 'react';
import { View } from 'react-native';
import { Container, Line, Paragraph, Title, Value, ValueNegative } from './style';

// import { Container } from './styles';

const Launchs: React.FC = () => {

  

  return (
    <Container>
      <Title>Últimos lancamentos</Title>
      <Line></Line>
      <ValueNegative>- R$: 22,50</ValueNegative>
      <Paragraph>11 de Fev.</Paragraph>
      <Line></Line>
      <Value>R$: 22,50</Value>
      <Paragraph>11 de Fev.</Paragraph>
      <Line></Line>
      <ValueNegative>- R$: 22,50</ValueNegative>
      <Paragraph>11 de Fev.</Paragraph>
      <Line></Line>
      <Value>R$: 22,50</Value>
      <Paragraph>11 de Fev.</Paragraph>
      
    </Container>
  );
}

export default Launchs;