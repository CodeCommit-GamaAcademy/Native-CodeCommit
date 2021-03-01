import React, { useMemo, useState } from 'react';
import { View } from 'react-native';
import { Lancamentos } from '../../interfaces/dashboard';
import { Container, Line, NullValues, Paragraph, Title, Value } from './style';

interface LaunchsProps {
  launchs: Lancamentos[]
}

const Launchs: React.FC<LaunchsProps> = ( { launchs } ) => {

  function currencyFormat(num: number) {
    return 'R$ ' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  }

  return (
    <Container>
      {
        launchs && <Title>Últimos lancamentos</Title>
      }
      
      { 
        launchs?.map( (launch, index) => {
            return (
              <View key={index}>
                <Line></Line>
                <Value negative={ launch.tipo === 'D' }>{currencyFormat(launch.valor)}</Value>
                <Paragraph>{launch.data}</Paragraph>
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