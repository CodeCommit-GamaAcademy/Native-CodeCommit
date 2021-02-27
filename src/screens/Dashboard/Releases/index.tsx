import React, { useCallback, useMemo, useState } from 'react';
import Balance from '../../../components/Balance';
import User from '../../../components/User';
import Plans from '../../../components/Plans';
import { Container, ScrollContainer } from './style';
import { ScrollView } from 'react-native-gesture-handler';
import Launchs from '../../../components/Launchs';
import { Conta, Contas } from '../../../interfaces/dashboard';
import api from '../../../services/api';
import { useNavigation } from '@react-navigation/native';

// import { Container } from './styles';

const Releases: React.FC = () => {
  const navigator = useNavigation();
  const [loading, setLoading] = useState(false);
  const [ login, setLogin ] = useState('');
  const [ token, setToken ] = useState('');

  const loadDashInformations = useCallback(async () => {
    setLoading(true);
    const date = new Date();
    const referenceDate = new Date(date.setDate(date.getMonth() - 120));
    
    try {
      const response = await api.get<Contas>(`dashboard?fim=${date}&inicio=${referenceDate}&login=${login}`, {
        headers: {
          Authorization: ''
        }
      });
      // props.contaBanco?.lancamentos && props.contaCredito?.lancamentos
      // if () {
      //   const initLaunchs = [...props.contaBanco.lancamentos, ...props.contaCredito.lancamentos];

      //   const orderedLauchs = initLaunchs.slice().sort((a, b) => {
      //       return Number(new Date(a.data)) - Number(new Date(b.data));
      //   }).reverse();

      //   return orderedLauchs;
      // } else {
      //     return [];
      // }

    } catch (err) {
      // console.log(username, password);
    } finally {
      setLoading(false);
    }

  }, [ token ]);

  // const allLaunchs = useMemo(() => {
  //   if (props.contaBanco?.lancamentos && props.contaCredito?.lancamentos) {
  //       const initLaunchs = [...props.contaBanco.lancamentos, ...props.contaCredito.lancamentos];

  //       const orderedLauchs = initLaunchs.slice().sort((a, b) => {
  //           return Number(new Date(a.data)) - Number(new Date(b.data));
  //       }).reverse();

  //       return orderedLauchs;
  //   } else {
  //       return [];
  //   }
  // }, [props.contaBanco?.lancamentos, props.contaCredito?.lancamentos]);


  const Account: Conta = {
    id: 1,
    lancamentos: [
      {
        conta: 515,
        data: 'hoje',
        id: 1,
        plano: {
          descricao: 'teste',
          id: 1,
          login: 'gabriel',
          padrao: true,
          tipoMovimento: 'R',
        },
        tipo: 'R',
        valor: 10,
      },
      {
        conta: 515,
        data: 'hoje',
        id: 1,
        plano: {
          descricao: 'teste',
          id: 1,
          login: 'gabriel',
          padrao: true,
          tipoMovimento: 'D',
        },
        tipo: 'D',
        valor: 20,
      }
    ],
    saldo: 1240.50,
  }

  return (
    <ScrollView>
      <Container>
        <User />
        <Balance conta={Account}/>
        <Plans lancamentos={Account.lancamentos}/>
        <Launchs />
      </Container>
    </ScrollView>
    
  );
}

export default Releases;