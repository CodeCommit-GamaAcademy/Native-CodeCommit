import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #8c52e5;
`;

export const CardForm = styled.View`
  background: #fff;
  width: 90%;
  padding: 16px 32px;
  border-radius: 8px;
`;

export const TitleForm = styled.Text`
  font-size: 21px;
  color: #1d1d1d;
  margin-bottom: 60px;
  text-align: center;
`;

export const InputForm = styled.TextInput`
  width: 100%;
  color: #878686;
  border-color: #878686;
  border-style: solid;
  border-bottom-width: 1px;
  font-size: 14px;
  padding: 12px 6px;
`
export const ButtonSubmit = styled(RectButton)`
  background: #68DE5A;
  margin-top: 50px;
  padding: 16px 32px;
`
