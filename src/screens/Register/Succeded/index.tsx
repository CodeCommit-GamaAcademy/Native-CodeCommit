import React, { useEffect } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import Logo from '../../../assets/logo.png';

import { Container, ContentContainer, ContentText, LogoImg } from './styles';

const Succeded: React.FC = () => {
    const navigator = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            navigator.navigate('Dashboard');
        }, 2000 );
    });

    return (
        <Container>
            <LogoImg source={ Logo } />

            <ContentContainer>
                <FontAwesome name="thumbs-o-up" size={162} color="#68DE5A" />
                <ContentText>Conta criada com sucesso!</ContentText>
            </ContentContainer>
        </Container>
    );
}

export default Succeded;