import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Container = styled.SafeAreaView`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 50px;
  height: ${Dimensions.get('window').height - 520};
  width: ${Dimensions.get('window').width - 30};
`;

export const Wellcome = styled.Text`
  font-weight: 500;
  font-size: 20px;
  color: #FBFBFB;
`