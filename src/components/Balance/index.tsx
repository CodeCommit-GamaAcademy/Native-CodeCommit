import React, { useEffect, useState } from 'react';
import { Conta, Lancamentos } from '../../interfaces/dashboard';
import { Container, Title, Value, Paragraph } from '../Balance/style';

// import { Container } from './styles';

interface BalanceProps {
  conta: Conta,
}

const Balance: React.FC<BalanceProps> = ( props ) => {

  const [value, setValue] = useState(0);
  const [releasesValue, setReleasesValue] = useState(0);

  function currencyFormat(num: number) {
    return 'R$ ' + num.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
  }
  
  useEffect( () => {
    //Setting account balance
    setValue(props.conta.saldo);

    //Setting releases value
    let total = 0;
    props.conta.lancamentos.forEach( (lancamento) => {
      total += lancamento.valor;
    })
    setReleasesValue(total);
  }, [ props ])

  return (
    <Container>
      <Title>Saldo da conta</Title>
      <Value>{currencyFormat(value)}</Value>
      <Paragraph>Lançamentos de débito: {currencyFormat(releasesValue)}</Paragraph>
    </Container>
  );
}

export default Balance;