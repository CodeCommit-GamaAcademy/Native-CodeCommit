import React, { useEffect, useState } from 'react';

import { Conta } from '../../interfaces/dashboard';
import { Container, HeaderCardContainer, Title, Value, Paragraph } from '../Balance/style';
import PlansSvg from '../../assets/svgs/Plans';

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
      <HeaderCardContainer>
        <PlansSvg color="#9B9B9B" />
        <Title>Saldo da conta</Title>
      </HeaderCardContainer>
      <Value>{currencyFormat(conta.saldo)}</Value>
      <Paragraph>Lançamentos de débito: {currencyFormat(releasesValue)}</Paragraph>
    </Container>
  );
}

export default Balance;