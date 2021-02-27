import React, { useMemo } from 'react';
import Balance from '../../../components/Balance';
import User from '../../../components/User';
import Plans from '../../../components/Plans';
import { Container, ScrollContainer } from './style';
import { ScrollView } from 'react-native-gesture-handler';
import Launchs from '../../../components/Launchs';
import { Conta } from '../../../interfaces/dashboard';

// import { Container } from './styles';

const Releases: React.FC = () => {

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

  //test value
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