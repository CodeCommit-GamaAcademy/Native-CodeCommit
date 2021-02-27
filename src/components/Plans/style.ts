import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Container = styled.SafeAreaView`
  margin-top: 30px;
  background-color: #FFFFFF;
  border-radius: 19px;
  height: ${Dimensions.get('window').height - 320};
  width: ${Dimensions.get('window').width - 50};
`;

export const Title = styled.Text`
  margin-left: 60px;
  margin-top: 20px;
  color: #9B9B9B;
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
  width: ${Dimensions.get('window').width - 120};
`