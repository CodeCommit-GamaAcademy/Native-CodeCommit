import React from 'react';
import { StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Container, Welcome } from '../User/style';
import { UserData } from '../../store/user/types';
import { BorderlessButton } from 'react-native-gesture-handler';

interface IUserProps {
  showCancel?: boolean;
  hideName?: boolean;
  user: UserData,
  onAction?: () => void,
  fromRealeases?: boolean,
  onCancel?: () => void
}

const User: React.FC<IUserProps> = ({ showCancel = false, hideName = false, fromRealeases = false, onAction, onCancel, ...props }) => {

  const formatName = (name: string) => {
    const arrayName = name.split(' ');
    return arrayName[0];
  }

  return (
    <Container>
      {
        !hideName 
        ? <Welcome fromReleases={fromRealeases}>Olá, { formatName(props.user.name) }</Welcome>
        : <Ionicons name="person-circle-outline" size={30} color={fromRealeases ? '#8c52e5' : '#FBFBFB'}/>
      }
      
      { !showCancel && !hideName ? (
            <BorderlessButton
              style={styles.button}
              onPress={onAction ? onAction : () => {}}
            >
              <Ionicons name="person-circle-outline" size={30} color={'#FBFBFB'}/>
            </BorderlessButton>
          ) : (
            <BorderlessButton
              style={styles.button}
              onPress={onCancel ? onCancel : () => {}}
            >
              <Ionicons name="close" size={30} color={fromRealeases ? '#8c52e5' : '#FBFBFB'}/>
            </BorderlessButton>
        ) 
      }


    </Container> 
  );
}

export default User;

const styles = StyleSheet.create({
    button: {
      justifyContent: 'center',
      alignContent: 'center'
    }
});