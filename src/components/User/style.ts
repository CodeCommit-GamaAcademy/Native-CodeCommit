import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Container = styled.SafeAreaView`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 50px;
  height: ${Dimensions.get('window').height - 520}px;
  width: 90%;
`;

export const Wellcome = styled.Text<{ fromReleases: boolean }>`
  font-weight: 500;
  font-size: 20px;
  color: ${ props => props.fromReleases ? '#8c52e5' : '#FFFFFF' };
`