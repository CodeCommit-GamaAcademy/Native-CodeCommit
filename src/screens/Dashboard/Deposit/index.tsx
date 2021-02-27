import React from 'react';
import { View, Text } from 'react-native';
import { Container, ScrollContainer } from './style';


const Deposit: React.FC = () => {
  return (
    <ScrollContainer>
      <Container>
            <Text>
              Depósitar
            </Text>
      </Container>
    </ScrollContainer>
  );
}

export default Deposit;