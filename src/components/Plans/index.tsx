import React, { useEffect, useState } from 'react';

import { Lancamentos } from '../../interfaces/dashboard';
import { Container, Line, Paragraph, HeaderCardContainer, Title, Value, ValueNegative } from './style';
import PlansSvg from '../../assets/svgs/Plans';

interface PlansProps {
  lancamentos: Lancamentos[];
  update: boolean;
}

const Plans: React.FC<PlansProps> = ( { lancamentos, update } ) => {

  const [ recept, setRecept ] = useState(0);
  const [ expenditure, setExpenditure ] = useState(0);

  function currencyFormat(num: number) {
    return 'R$ ' + num.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
  }

  useEffect( () => {
    let valueRecept = 0;
    let valueExpenditure = 0;
    lancamentos.forEach( (launch) => {
      if ( launch.valor >= 0 ) {
        valueRecept += launch.valor;
      } else if ( launch.valor <= 0 ) {
        valueExpenditure += launch.valor;
      }
    });
    setRecept(valueRecept);
    setExpenditure(valueExpenditure);
  }, [ lancamentos, update ])

  return (
    <Container>
      <HeaderCardContainer>
        <PlansSvg color="#9B9B9B" />
        <Title>Planos de conta</Title>
      </HeaderCardContainer>
      <Paragraph>Tipo do plano: Receita</Paragraph>
      <Value>{currencyFormat(recept)}</Value>
      <Line></Line>
      <Paragraph>Tipo do plano: Despesas</Paragraph>
      <ValueNegative>{currencyFormat(expenditure)}</ValueNegative>
    </Container>
  );
}

export default Plans;