import React, { useEffect, useState } from 'react';
import { Conta, Lancamentos } from '../../interfaces/dashboard';
import { Container, Title, Value, Paragraph } from '../Balance/style';

// import { Container } from './styles';

interface BalanceProps {
  conta: Conta,
  update: boolean
}

const Balance: React.FC<BalanceProps> = ( { conta, update } ) => {

  const [releasesValue, setReleasesValue] = useState(0);

  function currencyFormat(num: number) {
    return 'R$ ' + num.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
  }
  
  useEffect( () => {
    //Setting account balance

    //Setting releases value
    let total = 0;
    conta.lancamentos.forEach( (lancamento) => {
      total += lancamento.valor;
    })
    setReleasesValue(total);
  }, [ conta, update ]);

  return (
    <Container>
      <Title>Saldo da conta</Title>
      <Value>{currencyFormat(conta.saldo)}</Value>
      <Paragraph>Lançamentos de débito: {currencyFormat(releasesValue)}</Paragraph>
    </Container>
  );
}

export default Balance;