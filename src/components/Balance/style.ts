import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Container = styled.SafeAreaView`
  margin-top: 20px;
  background-color: #FFFFFF;
  border-radius: 19px;
  align-content: center;
  height: ${Dimensions.get('window').height - 460}px;
  width: ${Dimensions.get('window').width - 50}px;
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

export const Paragraph = styled.Text`
  margin-left: 25px;
  margin-top: 15px;
  font-size: 12px;
  color: #9B9B9B;
`