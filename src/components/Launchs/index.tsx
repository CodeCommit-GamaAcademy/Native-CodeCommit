import React, { useState } from 'react';
import { View } from 'react-native';
import { Lancamentos } from '../../interfaces/dashboard';
import { Container, Line, NullValues, Paragraph, Title, Value, ValueNegative } from './style';

interface LaunchsProps {
  launchs: Lancamentos[]
}

const Launchs: React.FC<LaunchsProps> = ( props ) => {

  const [ launchs, setLaunchs ] = useState<Lancamentos[]>(props.launchs);

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
          if (launch.tipo === 'R') {
            return (
              <View key={index}>
                <Line></Line>
                <Value>{currencyFormat(launch.valor)}</Value>
                <Paragraph>{launch.data}</Paragraph>
              </View>
            )
          }
          if (launch.tipo === 'D') {
            return (
              <View key={index}>
                <Line></Line>
                <ValueNegative>{currencyFormat(launch.valor)}</ValueNegative>
                <Paragraph>{launch.data}</Paragraph>
              </View>
            )
          }
        })
      ?? <NullValues>Nenhum lancamento</NullValues>} 
    </Container>
  );
}

export default Launchs;