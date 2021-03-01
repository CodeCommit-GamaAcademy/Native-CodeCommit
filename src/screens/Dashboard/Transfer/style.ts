import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

export const ContainerScrollView = styled.ScrollView`
  background: #8C52E5;
  flex: 1;
  height: ${Dimensions.get('window').height}px;
`

export const Main = styled.SafeAreaView`
  flex: 1;
  background: #8C52E5;
`

export const Container = styled.KeyboardAvoidingView`
  align-items: center;
  flex: 1;
  width: ${Dimensions.get('window').width}px;
`

export const ContainerForm = styled.View`
  background: #FFF;
  border-radius: 8px;
  height: 100%;
  justify-content: space-around;
  padding: 5px 25px 25px;
  width: 95%;

`

export const TitleForm = styled.Text`
  font-size: 18px;
  color: #9B9B9B;
`

export const InputForm = styled.TextInput`
  border-bottom-width: 1px;
  border-color: #878686;
  border-style: solid;
  font-size: 14px;
  height: 42px;
  margin-bottom: 40px;
  padding: 0 6px;

`

export const SelectForm = styled.View`
  border-bottom-width: 1px;
  border-color: #878686;
  border-style: solid;
  font-size: 14px;
  height: 42px;
  margin-bottom: 40px;
  padding: 0 6px;
`

export const ButtonSubmit = styled.TouchableOpacity`
  background: #68de5a;
  margin-top: 30px;
  padding: 26px 30px;
  border-radius: 20px;
  flex-direction: row;
  justify-content: space-between;
`

export const ButtonSubmitText = styled.Text`
  color: #fff;
  font-weight: bold;
  justify-content: space-between;
  font-size: 16px;
`
