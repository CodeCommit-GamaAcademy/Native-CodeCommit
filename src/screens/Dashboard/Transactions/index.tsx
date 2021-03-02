import React, { useEffect, useState, useCallback } from 'react';
import { Feather } from '@expo/vector-icons';
import Bottom from '../../../components/Bottom';
import RNPickerSelect from 'react-native-picker-select';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

import { Container, ScrollContainer, DepositCard, HeaderCardContainer, CardTitle, InputContainer, Input, InputSelect, ButtonSubmit, ButtonText, Main } from './style';
import ValidateCurrentToken from '../../../services/ValidateCurrentToken';
import updateStore from '../../../services/updateStore';
import api from '../../../services/api';
import { ApplicationStore } from '../../../store';
import { Contas, Plano } from '../../../interfaces/dashboard';
import User from '../../../components/User';

interface RouterType {
  routerType: string
}

interface RouteProps {
  route: {
    params: RouterType
  }
}

const Transactions: React.FC<RouteProps> = (props) => {
  console.log(props.route.params.routerType);
  
  const navigation = useNavigation();
  const store = useSelector( (store: ApplicationStore) => store.user );

  const [destinatario, setDestinatario] = useState('');
  const [planoConta, setPlanoConta] = useState('');
  const [transacao, setTransacao] = useState('');
  const [valor, setValor] = useState('');
  const [isDeposit, setIsdeposit] = useState(
    props.route.params.routerType == 'deposit' ? true : false
  );

  useEffect(() => {
    const GetAuth = async () => {
      await ValidateCurrentToken();
      const isLogged = await updateStore();

      if ( !isLogged ) navigation.navigate('Login');
    }

    GetAuth();
  }, []);

  const handleSubmit = useCallback(async () => {
    try {
      const myAccount = await api.get<Contas>(`dashboard?fim=2021-03-22&inicio=2021-02-22&login=${store?.login}`, {
        headers: {
          Authorization: store?.token,
        }
      });

      const transactions = await api.get<Plano[]>(`lancamentos/planos-conta?login=${store?.login}`, {
        headers: {
          Authorization: store?.token,
        }
      });

      const {status} = await api.post('lancamentos', {
        "conta": planoConta == "CB" ? myAccount.data.contaBanco.id : myAccount.data.contaCredito.id,
        "contaDestino": isDeposit ? "" : destinatario.trim(),
        "data": moment().format('YYYY-MM-DD'),
        "descricao": transactions.data.find(p => p.tipoMovimento == transacao)?.descricao,
        "login": store?.login,
        "planoConta": transactions.data.find(p => p.tipoMovimento == transacao)?.id,
        "valor": +valor
      }, {
        headers: {
          Authorization: store?.token,
        }
      });

      if (status !== 200) throw new Error('Something went wrong with request')
      clearForm()

    }catch(err){ 
      console.log(err)
    }

  }, isDeposit ? [planoConta, transacao, valor, store?.login, store?.token] : [destinatario, planoConta, transacao, valor, store?.login, store?.token])

  function clearForm() {
    setDestinatario('')
    setPlanoConta('')
    setTransacao('')
    setValor('')
  }

  return (
    <Main>
      <ScrollContainer>
        <Container>
          {store && <User user={ store } showCancel onCancel={() => navigation.navigate('Lancamentos')} />}
            <DepositCard>
              <HeaderCardContainer>
              { isDeposit ? <CardTitle>Depósitos</CardTitle> :
              <CardTitle>Transferências</CardTitle>
              }
              </HeaderCardContainer>
              <InputContainer>
              {isDeposit ? 
                <></>
                :
                <Input 
                  placeholder="Destinatário" 
                  value={destinatario}
                  onChangeText={(text) => setDestinatario(text)}
                />
              }
              <InputSelect>
                <RNPickerSelect
                    placeholder={{label:"Plano de conta"}}
                    onValueChange={(value) => setPlanoConta(value)}
                    value={planoConta}
                    items={[
                        { label: 'Conta Banco', value: 'CB' },
                        { label: 'Conta Crédito', value: 'CC' },
                    ]}
                    Icon={() => {
                      return <Feather name="chevron-down" size={24} color="#878686" />;
                    }}
                />
              </InputSelect>
              <InputSelect>
                <RNPickerSelect
                  placeholder={{label:"Tipo de transação"}}
                  onValueChange={(value) => setTransacao(value)}
                  value={transacao}
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
              <Input 
                placeholder={isDeposit ? 'Valor de depósito' : 'Valor de transferência'} keyboardType='numeric'
                value={valor}
                onChangeText={(text) => setValor(text)}
              />
              <ButtonSubmit onPress={handleSubmit}>
                <ButtonText> {isDeposit ? 'Realizar depósito' : 'Realizar transferência'}</ButtonText>
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

export default Transactions;
