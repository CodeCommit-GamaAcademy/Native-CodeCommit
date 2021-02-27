import React from 'react';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Container, Wellcome } from '../User/style';

// import { Container } from './styles';

const User: React.FC = () => {
  return (
    <Container>
      <Wellcome>Olá, Usuário</Wellcome>
      <Ionicons name="person-circle-outline" size={30} color={'#FBFBFB'}/>
    </Container> 
  );
}

export default User;