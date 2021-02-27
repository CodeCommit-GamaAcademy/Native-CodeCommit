import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background: #8C52E5;
    align-items: center;
    justify-content: center;
    height: ${ Dimensions.get('window').height }px;
`;

export const ScrollContainer = styled.ScrollView`
    flex: 1;
    background: #8c52e5;
`

export const AvoidContainer = styled.KeyboardAvoidingView`
    flex: 1;
    align-items: center;
    justify-content: center;
`

export const LogoImage = styled.Image`
  margin-bottom: 60px;
  margin-top: 25px
`;

export const Card = styled.View`
    align-items: center;
    width: 325px;

    padding: 30px;

    background: #fff;
    border-radius: 8px;
    margin-top: -25px;
`
export const Title = styled.Text`
    font-size: 21px;
    font-weight: bold;
`

export const InputContainer = styled.View`
    margin-top: 40px;
    width: 259px;
    height: 224px;
`

export const Input = styled.TextInput`
    width: 100%;
    color: #878686;
    border-color: #878686;
    border-style: solid;
    border-bottom-width: 1px;
    font-size: 14px;
    padding: 12px 6px;
    margin-top: 40px;
`

export const Button = styled.TouchableOpacity`
    height: 56px;
    margin-top: 40px;
    background: #68DE5A;
    border-radius: 20px;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    padding: 20px;
`

export const ButtonText = styled.Text`
    color: #fff;
    font-weight: bold;
    font-size: 16px; 
`

export const ButtonLogin = styled.TouchableOpacity`
    margin-top: 140px;
`
export const ButtonLoginText = styled.Text`
    color: #8c52e5;
    margin-top: 32px;
    font-size: 13px;
    font-style: normal;
`

