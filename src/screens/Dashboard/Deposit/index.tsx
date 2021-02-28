import React from 'react';
import { Feather } from '@expo/vector-icons';
import { Container, ScrollContainer, TitleContainer, Title, DepositCard, HeaderCardContainer, CardTitle, InputContainer, Input, ButtonSubmit, ButtonText } from './style';
import { Main } from '../Releases/style';
import Bottom from '../../../components/Bottom';


const Deposit: React.FC = () => {
  return (
    <Main>
      <ScrollContainer>
        <Container>
          <TitleContainer>
            <Title>Olá, Usuário</Title>
            <Feather name="x" size={20} color="#fff" />
          </TitleContainer>
            <DepositCard>
              <HeaderCardContainer>
                <CardTitle>Depósitos</CardTitle>
              </HeaderCardContainer>
              <InputContainer>
                <Input placeholder="Destinatário"></Input>
                <Input placeholder="Plano de conta"></Input>
                <Input placeholder="Tipo de transação"></Input>
                <Input placeholder="Valor de depósito"></Input>
                <ButtonSubmit>
                  <ButtonText>Realizar depósito</ButtonText>
                  <Feather name="arrow-right" size={20} color='#fff' />
                </ButtonSubmit>
              </InputContainer>
            </DepositCard>
        </Container>
      </ScrollContainer>
      <Bottom />
    </Main>
  );
}

export default Deposit;