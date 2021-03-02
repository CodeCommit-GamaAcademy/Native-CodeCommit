import React, { useEffect, useState, useCallback } from 'react';
import { Feather } from '@expo/vector-icons';
import Bottom from '../../../components/Bottom';
import { Container, ScrollContainer, TitleContainer, Title, DepositCard, HeaderCardContainer, CardTitle, InputContainer, Input, InputSelect, ButtonSubmit, ButtonText, Main } from './style';
import RNPickerSelect from 'react-native-picker-select';
import { useNavigation } from '@react-navigation/native';
import ValidateCurrentToken from '../../../services/ValidateCurrentToken';
import updateStore from '../../../services/updateStore';
import User from '../../../components/User';
import { useSelector } from 'react-redux';
import { ApplicationStore } from '../../../store';
import api from '../../../services/api';
import { Text } from 'react-native';



const Deposit: React.FC = () => {
  const navigation = useNavigation();

  const user = useSelector((store: ApplicationStore) => store.user);

  useEffect(() => {
    const GetAuth = async () => {
      await ValidateCurrentToken();
      const isLogged = await updateStore();

      if ( !isLogged ) navigation.navigate('Login');
    }

    GetAuth();
  }, []);
  

  const [destinatario, setDestinatario] = useState('');
  const [planoConta, setPlanoConta] = useState('');
  const [transacao, setTrasacao] = useState('');
  const [valor, setValor] = useState('');
  const [isDeposit, setIsdeposit] = useState(false);

  const handleDeposit = useCallback(async () => {
    try {
      const require = await api.post('lancamentos',{
        contaDestino: destinatario,
        planoConta: planoConta,
        valor: valor
      })

      const plans = await api.post('lancamentos/planos-conta', {
        tipoMovimento: transacao
      }, { headers: { Authorization: user?.token } });
    }catch(err){ 
      console.log(err)
    }
  }, [destinatario, planoConta, transacao, valor])

  return (
    <Main>
      <ScrollContainer>
        <Container>
          {user && <User user={ user } showCancel onCancel={() => navigation.navigate('Lancamentos')} />}
            <DepositCard>
              <HeaderCardContainer>
              { isDeposit ? <CardTitle>Transferências</CardTitle> :
                <CardTitle>Depósitos</CardTitle>
              }
              </HeaderCardContainer>
              <InputContainer>
              {isDeposit ? 
                <Input placeholder="Destinatário" value={destinatario} onChangeText={(text) => setDestinatario(text)}></Input>
               : <></> }
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