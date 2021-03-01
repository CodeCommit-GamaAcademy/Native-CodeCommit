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
  margin-left: 60px;
  margin-top: 20px;
  margin-bottom: 40px;
  color: #9B9B9B;
`

export const Value = styled.Text`
  align-self: center;
  margin-left: 25px;
  margin-top: 10px;
  font-size: 24px;
  font-weight: 500;
  color: #34A6E7;
`

export const ValueNegative = styled.Text`
  align-self: center;
  margin-left: 25px;
  margin-top: 10px;
  font-size: 24px;
  font-weight: 500;
  color: #F45F5F;
`

export const Paragraph = styled.Text`
  align-self: center;
  margin-left: 25px;
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