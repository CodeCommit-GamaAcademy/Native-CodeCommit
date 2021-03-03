import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Container = styled.View`
  margin-top: 20px;
  background-color: #FFFFFF;
  border-radius: 10px;
  align-content: center;
  padding: 10px 0 40px 0;
  width: ${Dimensions.get('window').width - 50}px;
`;

export const HeaderCardContainer = styled.View`
  align-items: center;
  flex-direction: row;
  margin: 20px 0 15px 25px;
`

export const Title = styled.Text`
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

export const Paragraph = styled.Text`
  margin-left: 25px;
  margin-top: 15px;
  font-size: 12px;
  color: #9B9B9B;
`