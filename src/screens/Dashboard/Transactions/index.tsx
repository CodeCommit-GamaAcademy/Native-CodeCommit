import React, { useEffect, useState, useCallback } from 'react';
import { Feather } from '@expo/vector-icons';
import Bottom from '../../../components/Bottom';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import moment from 'moment';
import CalendarPicker from 'react-native-calendar-picker';
import { useToast } from 'react-native-styled-toast'

import { Container, ScrollContainer, DepositCard, HeaderCardContainer, CardTitle, Input, Calendar, ButtonSubmit, ButtonText, Main, InputLabel } from './style';
import ValidateCurrentToken from '../../../services/ValidateCurrentToken';
import updateStore from '../../../services/updateStore';
import api from '../../../services/api';
import { ApplicationStore } from '../../../store';
import { Contas, Plano } from '../../../interfaces/dashboard';
import User from '../../../components/User';
import Loader from '../../../components/Loader';
import PlansSvg from '../../../assets/svgs/Plans';

interface RouterType {
  routerType: string
}

interface RouteProps {
  route: {
    params: RouterType
  }
}

const Transactions: React.FC<RouteProps> = (props) => {  
  const { toast } = useToast();
  const navigation = useNavigation();
  const store = useSelector( (store: ApplicationStore) => store.user );

  const [loading, setLoading] = useState(false);
  const [destinatario, setDestinatario] = useState('');
  const [data, setData] = useState('');
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');
  const [userExist, setUserExist] = useState(true);
  const [isDeposit, setIsdeposit] = useState(
    props.route.params.routerType === 'deposit' ? true : false
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
    setLoading(true);
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
      
      if (!isDeposit) {
        const check = await api.get<Plano[]>(`lancamentos/planos-conta?login=${destinatario.trim()}`, {
          headers: {
            Authorization: store?.token,
          }
        });
        check.data.length === 0 ? setUserExist(false) : setUserExist(true);
      }
      
      if ( !userExist ) {
        toast(
          { 
            message: 'Este usuário parece não existir!', 
            color: 'error', 
            iconColor: 'error', 
            accentColor: 'error', 
            iconName: 'x' 
          });
          return;
      }

      if ( Number.parseFloat(valor) <= 0 || valor === '' ) {
        toast({ 
          message: 'Valor não pode ser nulo ou negativo!', 
          color: 'error', 
          iconColor: 'error', 
          accentColor: 'error', 
          iconName: 'x' 
        });
        return;
      }

      const {status} = await api.post('lancamentos', {
        "conta": myAccount.data.contaBanco.id,
        "contaDestino": isDeposit ? "" : destinatario.trim(),
        "data": moment(data).format('YYYY-MM-DD'),
        "descricao": descricao,
        "login": store?.login,
        "planoConta": isDeposit ? transactions.data[0].id : transactions.data[3].id ,
        "valor": +valor
      }, {
        headers: {
          Authorization: store?.token,
        }
      });

      if (status !== 200) throw new Error('Something went wrong with request')
      clearForm()
      toast({message:"Transferência realizada com sucesso!"});
      navigation.navigate('Lancamentos');

    }catch(err){ 
      toast({ 
        message: 'Aconteceu algo de errado!', 
        color: 'error', 
        iconColor: 'error', 
        accentColor: 'error', 
        iconName: 'x' 
      });

    }finally {
      setLoading(false);
    }

  }, isDeposit ? [descricao, data, valor, store?.login, store?.token] : [destinatario, descricao, data, valor, store?.login, store?.token])

  function clearForm() {
    setDestinatario('')
    setDescricao('')
    setData('')
    setValor('')
  }

  const handleChangeValue = useCallback((e: string) => {
    const numberToAdd = Number(e);

    if (numberToAdd > 10000) setValor('10000');
    else setValor(numberToAdd.toString());
  }, []);

  return (
    <Main>
        <ScrollContainer>
        <Container>
          {store && <User user={ store } showCancel onCancel={() => navigation.navigate('Lancamentos')} />}
            <DepositCard>
              <HeaderCardContainer>
              { isDeposit ? 
                <>
                  <PlansSvg color="#9B9B9B" /> 
                  <CardTitle>Depósitos</CardTitle> 
                </>
                :
                <>
                  <PlansSvg color="#9B9B9B" />
                  <CardTitle>Transferências</CardTitle>
                </>
              }
              </HeaderCardContainer>
              {isDeposit ? 
                <></>
                :
                <Input 
                  placeholder="Destinatário" 
                  value={destinatario}
                  onChangeText={(text) => setDestinatario(text)}
                />
              }
              <Input
                placeholder="Descrição"
                value={descricao}
                onChangeText={(text) => setDescricao(text)}
              />
              <InputLabel>Escolha a data {isDeposit ? 'do depósito' : 'da transferência'}:</InputLabel>
              <Calendar>
                <CalendarPicker
                  onDateChange={(date) => setData(date.format('YYYY-MM-DD'))}
                  minDate={new Date()}
                  width={ 250 }
                  height={ 250 }
                  weekdays={['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom']}
                  months={['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']}
                  previousTitle="Anterior"
                  nextTitle="Próximo"
                  selectedDayColor="#68DE5A"
                  selectedDayTextColor="#FFF"
                  todayBackgroundColor="#8C52E5"
                  todayTextStyle={{ color: "#FFF" }}
                  textStyle={{ color: '#FFF' }}
                />
              </Calendar>
              <Input 
                placeholder={isDeposit ? 'Valor de depósito em R$' : 'Valor de transferência em R$'} keyboardType='number-pad'
                value={valor}
                onChangeText={(text) => handleChangeValue(text)}
              />
              {
                loading ? (<Loader marginTop={34} />) : 
                (
                  <ButtonSubmit onPress={handleSubmit}>
                    <ButtonText> {isDeposit ? 'Realizar depósito' : 'Realizar transferência'}</ButtonText>
                    <Feather name="arrow-right" size={20} color='#fff' />
                  </ButtonSubmit>
                )
              }
              
          </DepositCard>
        </Container>
      </ScrollContainer>
      <Bottom />
    </Main>
  );
}

export default Transactions;
