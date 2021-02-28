import React from 'react';
import { StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Container, Wellcome } from '../User/style';
import { UserData } from '../../store/user/types';

// import { Container } from './styles';

interface IUserProps {
  showCancel?: boolean;
}

const User: React.FC<IUserProps> = ({ showCancel = false }) => {
  return (
    <Container>
      <Wellcome>Olá, Usuário</Wellcome>
      { !showCancel ? (
        <Ionicons name="person-circle-outline" size={30} color={'#FBFBFB'}/>
        ) : (
        <Ionicons name="close" size={30} color={'#FBFBFB'}/>
      ) }
    </Container> 
  );
}

export default User;