import React, { useRef, useState } from 'react';
import { Animated, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Container, Wellcome } from '../User/style';
import { UserData } from '../../store/user/types';

// import { Container } from './styles';

interface UserProps {
  account: UserData,
}

const User: React.FC<UserProps> = ( props ) => {

  const fadeAnim = useRef(new Animated.Value(0)).current;

  const [ user, setUser ] = useState<UserData>( props.account );

  const getFirstName = () => {
    const arrayName = user.name.split(' ');
    return arrayName[0];
  }

  const show = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const hide = () => {
    // Will change fadeAnim value to 0 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  return (
    <Container>
      
      <Wellcome>Olá, {getFirstName()}</Wellcome>
      <Ionicons onPress={()=>console.log('teste')} name="person-circle-outline" size={30} color={'#FBFBFB'}/>
    </Container> 
  );
}

export default User;