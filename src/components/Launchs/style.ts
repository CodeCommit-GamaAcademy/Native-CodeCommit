import { Dimensions } from "react-native";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  margin-top: 30px;
  margin-bottom: 60px;
  background-color: #FFFFFF;
  border-radius: 19px;

  padding: 20px 0;
  
  width: ${Dimensions.get('window').width - 50}px;
`;

export const Title = styled.Text`
  margin-top: 20px;
  margin-bottom: 40px;
  color: #9B9B9B;
  text-align: center;
`

export const Value = styled.Text<{ negative?: boolean }>`
  align-self: center;
  margin-top: 10px;
  font-size: 24px;
  font-weight: 500;
  color: ${ props => props.negative ? '#F45F5F' : '#34A6E7' }
`

export const Paragraph = styled.Text`
  align-self: center;
  margin-top: 10px;
  margin-bottom: 20px;
  font-size: 12px;
  color: #9B9B9B;
`

export const Line = styled.View`
  align-self: center;
  background: #9B9B9B;
  height: 20px;
  width: 1px;
`

export const NullValues = styled.Text`
  align-self: center;
  margin-top: 10px;
  margin-bottom: 10px;
  font-weight: 500;
  color: #34A6E7;
`