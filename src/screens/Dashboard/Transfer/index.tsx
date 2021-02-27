import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect } from 'react';
import { Text } from 'react-native';
import { Container } from './style';

// import { Container } from './styles';

const Transfer: React.FC = () => {
    return (
        <Container>
            <Text>
                Transferir  
            </Text>
        </Container>
    );
}

export default Transfer;