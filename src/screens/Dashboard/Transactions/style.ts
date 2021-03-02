import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    justify-content: center;
    align-items: center;
    background: #8C52E5;
`;

export const Main = styled.KeyboardAvoidingView`
  flex: 1;
  background: #8C52E5;
`

export const ScrollContainer = styled.ScrollView`
    flex: 1;
    background: #8c52e5;
`
export const TitleContainer = styled.View`
    margin-top: 30px;
    width: 80%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`
export const Title = styled.Text`
    color: #fff;
    font-size: 26px;
`

export const DepositCard = styled.View`
    width: 336px;
    height: 691px;
    background: #fff;
    border-radius: 8px;
    margin-top: 30px;
`

export const HeaderCardContainer = styled.View`
    flex-direction: row;
`

export const CardTitle = styled.Text`
    font-size: 18px;
    color: #9B9B9B;
    margin-top: 22px;
    margin-left: 68px;
    font-weight: 500;
`

export const InputContainer = styled.View`
    width: 259px;
    height: 271px;
    margin-top: 70px;
    margin-left: 38px;
`

export const Input = styled.TextInput`
    margin-bottom: 30px;
    border-bottom-width: 1px;
    border-bottom-color: #878686;
    padding-bottom: 12px;
    margin-top: 45px;
`

export const InputSelect = styled.View`
    margin-bottom: 30px;
    border-bottom-width: 1px;
    border-bottom-color: #878686;
    padding-bottom: 12px;
    margin-top: 45px;
`

export const ButtonSubmit = styled.TouchableOpacity`
    width: 100%;
    height: 56px;
    background: #68DE5A;
    border-radius: 20px;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    padding: 20px;
    margin-top: 90px;
`

export const ButtonText = styled.Text`
    color: #fff;
    font-size: 16px;
    font-weight: 500;
`