import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const LogoImg = styled.Image`
  margin-bottom: 60px;
`;

export const ContainerScrollView = styled.ScrollView`
  flex: 1;
  height: auto;
`;

export const Container = styled.KeyboardAvoidingView`
    align-items: center;
    background-color: #8c52e5;
    justify-content: center;
    flex: 1;
    height: 100%;
`;


export const CardForm = styled.View`
  background: #fff;
  width: 90%;
  padding: 42px 36px;
  border-radius: 8px;
`;

export const TitleForm = styled.Text`
  font-size: 21px;
  color: #1d1d1d;
  margin-bottom: 40px;
  text-align: center;
  line-height: 30px;
  font-weight: 900;
`;

export const InputForm = styled.TextInput<{ isLastChild?: boolean }>`
  width: 100%;
  color: #878686;
  border-color: #878686;
  border-style: solid;
  border-bottom-width: 1px;
  font-size: 14px;
  padding: 12px 6px;
  margin-bottom: ${({ isLastChild }) => isLastChild ? 0 : 60}px;
`


export const ButtonSubmit = styled.TouchableOpacity`
  background: #68DE5A;
  margin-top: 50px;
  padding: 16px 26px;
  border-radius: 20px;
  height: 56px;
  flex-direction: row;
  justify-content: space-between;
`

export const ButtonSubmitText = styled.Text`
  color: #fff;
  justify-content: space-between;
`;

export const LinkForm = styled.TouchableOpacity<{ isLastChild?: boolean }>`
  margin-bottom: 16px;
  text-align: center;
  margin-top: ${({ isLastChild }) => isLastChild ? 0 : 50}px;
  margin-bottom: ${({ isLastChild }) => isLastChild ? 0 : 16}px;
  flex-direction: row;
  justify-content: center;
`;

export const LinkFormText = styled.Text`
  text-align: center;
  color: #8C52E5;
  margin-right: 4px;
`;


