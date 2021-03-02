import React from 'react';
import { StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { ButtonsWrapper, ButtonText, Container, ModalContainer, ModalTitle } from './styles';

const LogoutModal: React.FC = () => {
    return (
        <Container>
            <ModalContainer>
                <ModalTitle>Tem certeza que deseja sair?</ModalTitle>

                <ButtonsWrapper>
                    <RectButton style={styles.button}>
                        <ButtonText>Sim</ButtonText>
                    </RectButton>
                    
                    <RectButton style={styles.button}>
                        <ButtonText>Não</ButtonText>
                    </RectButton>
                </ButtonsWrapper>
            </ModalContainer>
        </Container>
    );
}

export default LogoutModal;

const styles = StyleSheet.create({
    button: {
        paddingVertical: 16,
        paddingHorizontal: 36,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#a100ff'
    }
});