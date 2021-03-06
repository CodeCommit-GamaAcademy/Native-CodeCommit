import React from 'react';
import { View } from 'react-native';

import { Lancamentos } from '../../interfaces/dashboard';
import { Container, Line, NullValues, Paragraph, Title, Value, HeaderCardContainer } from './style';
import PlansSvg from '../../assets/svgs/Plans';

interface LaunchsProps {
  launchs: Lancamentos[]
}

const Launchs: React.FC<LaunchsProps> = ( { launchs } ) => {

  function currencyFormat(num: number) {
    return 'R$ ' + num.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
  }

  return (
    <Container>
      {
        launchs && 
        <HeaderCardContainer>
          <PlansSvg color="#9B9B9B" />
          <Title>Últimos lancamentos</Title>
        </HeaderCardContainer>
      }
      
      { 
        launchs?.map( (launch, index) => {
            return (
              <View key={index}>
                <Line></Line>
                <Value negative={ launch.valor < 0 }>{currencyFormat(launch.valor)}</Value>
                <Paragraph>{launch.data}</Paragraph>
                <Paragraph>{launch.decricao}</Paragraph>

              </View>
            );
        })
      }
      {
        launchs.length === 0 && <NullValues>Nenhuma transação encontrada</NullValues>
      }
    </Container>
  );
}

export default Launchs;