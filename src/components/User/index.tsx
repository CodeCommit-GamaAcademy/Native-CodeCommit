import React from 'react';
import { StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Container, Welcome } from '../User/style';
import { UserData } from '../../store/user/types';

interface IUserProps {
  showCancel?: boolean;
  hideName?: boolean;
  user: UserData,
  hide?: Function,
  show?: Function,
  fromRealeases?: boolean,
}

const User: React.FC<IUserProps> = ({ showCancel = false, hideName = false, fromRealeases = false, ...props }) => {

  const formatName = (name: string) => {
    const arrayName = name.split(' ');
    return arrayName[0];
  }

  return (
    <Container>
      {
        !hideName 
        ? <Welcome fromReleases={fromRealeases}>Olá, { formatName(props.user.name) }</Welcome>
        : <Ionicons onPress={() => props.show && props.show('show')} name="person-circle-outline" size={30} color={fromRealeases ? '#8c52e5' : '#FBFBFB'}/>
      }
      
      { !showCancel && !hideName ? (
        <Ionicons onPress={() => props.show && props.show('show')} name="person-circle-outline" size={30} color={'#FBFBFB'}/>
        ) : (
        <Ionicons onPress={() => props.hide && props.hide('hide')} name="close" size={30} color={fromRealeases ? '#8c52e5' : '#FBFBFB'}/>
      ) 
      }


    </Container> 
  );
}

export default User;