import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Container = styled.View`
  margin-top: 30px;
  background-color: #FFFFFF;
  border-radius: 10px;
<<<<<<< HEAD
  padding: 40px 25px;
  width: ${Dimensions.get('window').width - 50}px;
`;

export const Title = styled.Text`
  margin-left: 60px;
=======
  padding: 20px 0;
  width: ${Dimensions.get('window').width - 50}px;
`;

export const HeaderCardContainer = styled.View`
  align-items: center;
  flex-direction: row;
  margin-left: 25px;
  margin-top: 20px;
`

export const Title = styled.Text`
>>>>>>> a122f7d4d28e24c24debef2fda31911117b4e7b8
  color: #9B9B9B;
  margin-left: 10px;
`

export const Value = styled.Text`
  margin-left: 25px;
  margin-top: 10px;
  font-size: 24px;
  font-weight: 500;
  color: #34A6E7;
`

export const ValueNegative = styled.Text`
  margin-left: 25px;
  margin-top: 10px;
  font-size: 24px;
  font-weight: 500;
  color: #F45F5F;
`

export const Paragraph = styled.Text`
  margin-left: 25px;
  margin-top: 25px;
  font-size: 12px;
  color: #9B9B9B;
`

export const Line = styled.View`
  margin-top: 30px;
  align-self: center;
  background: #9B9B9B;
  height: 1px;
  width: ${Dimensions.get('window').width - 100}px;
`