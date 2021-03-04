import React from 'react';
import { StyleSheet, ViewProps } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { ButtonContainer, ButtonsWrapper, ButtonText, Container, ModalContainer, ModalTitle } from './styles';

interface LogoutModalProps extends ViewProps {
    accept: () => void;
    decline: () => void;
}

const LogoutModal: React.FC<LogoutModalProps> = ({ accept, decline, ...props }) => {
    return (
        <Container {...props} >
            <ModalContainer>
                <ModalTitle>Tem certeza que deseja sair?</ModalTitle>

                <ButtonsWrapper>
                    <ButtonContainer isAcceptButton >
                        <RectButton style={styles.button} onPress={ accept } >
                            <ButtonText>Sim</ButtonText>
                        </RectButton>
                    </ButtonContainer>
                    
                    <ButtonContainer>
                        <RectButton style={styles.button} onPress={ decline } >
                            <ButtonText>Não</ButtonText>
                        </RectButton>
                    </ButtonContainer>
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
        borderRadius: 8
    }
});