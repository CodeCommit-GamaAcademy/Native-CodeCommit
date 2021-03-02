import React, { useCallback, useState } from 'react';
import { Feather } from '@expo/vector-icons';
import Bottom from '../../../components/Bottom';
import { Container, ScrollContainer, TitleContainer, Title, DepositCard, HeaderCardContainer, CardTitle, InputContainer, Input, InputSelect, ButtonSubmit, ButtonText, Main } from './style';
import RNPickerSelect from 'react-native-picker-select';
import api from '../../../services/api';



const Deposit: React.FC = () => {

  const [destinatario, setDestinatario] = useState('');
  const [planoConta, setPlanoConta] = useState('');
  const [transacao, setTrasacao] = useState('');
  const [valor, setValor] = useState('');

  const handleDeposit = useCallback(async () => {
    try {
      const require = await api.post('lancamentos',{
        contaDestino: destinatario,
        planoConta: planoConta,
        valor: valor
      })

      const plans = await api.post('lancamentos/planos-conta', {
        tipoMovimento: transacao
      })
    }catch(err){
      console.log(err)
    }
  }, [destinatario, planoConta, transacao, valor])

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
                <Input placeholder="Destinatário" value={destinatario} onChangeText={(text) => setDestinatario(text)}></Input>
                <InputSelect>
                  <RNPickerSelect
                      placeholder={{label:"Plano de conta"}}
                      onValueChange={(value) => setPlanoConta(value)}
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
                    onValueChange={(value) => setTrasacao(value)}
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
                <Input placeholder="Valor de depósito" keyboardType='numeric' value={valor} onChangeText={(text) => setValor(text)}></Input>
                <ButtonSubmit onPress={handleDeposit}>
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