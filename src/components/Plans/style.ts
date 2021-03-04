import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Container = styled.View`
  margin-top: 30px;
  background-color: #FFFFFF;
  border-radius: 10px;
  padding: 40px 25px;
  width: ${Dimensions.get('window').width - 50}px;
`;

export const Title = styled.Text`
  margin-left: 10px;
  color: #9b9b9b;
`;

export const HeaderCardContainer = styled.View`
  align-items: center;
  flex-direction: row;
  margin-left: 25px;
  margin-top: 20px;
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