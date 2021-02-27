import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Container = styled.SafeAreaView`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  height: 150px;
  width: ${Dimensions.get('window').width - 30};
`;

export const Wellcome = styled.Text`
  font-weight: 500;
  font-size: 20px;
  color: #FBFBFB;
`