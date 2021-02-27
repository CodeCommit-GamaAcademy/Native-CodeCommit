import React from 'react';
import { Feather } from '@expo/vector-icons';
import { Container, ScrollContainer, TitleContainer, Title, DepositCard, HeaderCardContainer, CardTitle, InputContainer, Input, InputSelect, ButtonSubmit, ButtonText } from './style';
import RNPickerSelect from 'react-native-picker-select';



const Deposit: React.FC = () => {

  return (
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
              <InputSelect>
                <RNPickerSelect
                    placeholder={{label:"Plano de conta"}}
                    onValueChange={(value) => console.log(value)}
                    items={[
                        { label: 'Conta banco', value: 'cb' },
                        { label: 'Conta crédito', value: 'cc' },
                    ]}
                    Icon={() => {
                      return <Feather name="chevron-down" size={24} color="#878686" />;
                    }}
                />
              </InputSelect>
              <InputSelect>
                <RNPickerSelect
                  placeholder={{label:"Tipo de transação"}}
                  onValueChange={(value) => console.log(value)}
                    items={[
                      { label: 'Receita', value: 'R' },
                      { label: 'Despesa', value: 'D' },
                      { label: 'Transferências entre contas', value: 'TC' },
                      { label: 'Transferências entre usuários', value: 'TU' },
                    ]}
    
                  Icon={() => {
                    return <Feather name="chevron-down" size={24} color="#878686" />;
                  }}
                />
              </InputSelect>
              <Input placeholder="Valor de depósito"></Input>
              <ButtonSubmit>
                <ButtonText>Realizar depósito</ButtonText>
                <Feather name="arrow-right" size={20} color='#fff' />
              </ButtonSubmit>
            </InputContainer>
          </DepositCard>
      </Container>
    </ScrollContainer>
  );
}

export default Deposit;