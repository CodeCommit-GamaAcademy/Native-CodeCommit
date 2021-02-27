import styled from 'styled-components/native';

export const SafeAreaContainer = styled.SafeAreaView`
    flex: 1;
    background-color: #8c52e5;
`

export const ScrollContainer = styled.ScrollView`

`

export const Container = styled.KeyboardAvoidingView`
    flex: 1;
    justify-content: center;
    align-items: center;

    background-color: #8c52e5;

    padding: 20px;
`;

export const Logo = styled.Image`
    margin-bottom: 75px;
`

export const FormContainer = styled.View`
    background: #fff;
    padding: 16px 32px;
    border-radius: 8px;
    margin-top: -30px;
    width: 100%;
`
export const FormTitle = styled.Text`
    font-weight: 500;
    font-size: 21px;
    margin-bottom: 35px;
`
export const FormInput = styled.TextInput`
    margin-bottom: 30px;

    border-bottom-width: 1px;
    border-bottom-color: #878686;
    padding-bottom: 12px;
`

export const SubmitButton = styled.TouchableHighlight<{ isActive: boolean }>`
    background: ${ props => props.isActive ? '#68DE5A' : '#D8D8D8' };

    padding: 20px;
    height: 56px;
    border-radius: 20px;
`

export const SubmitTextWrapper = styled.View`
    flex-direction: row;

    justify-content: space-between;
`

export const SubmitText = styled.Text<{ isActive: boolean }>`
    color: ${ props => props.isActive ? '#fff' : '#9b9b9b' };

    font-size: 16px;
    font-weight: bold;
`

export const ReturnLink = styled.TouchableOpacity`
    margin-top: 24px;
    margin-bottom: 12px;
`
export const ReturnText = styled.Text`
    text-align: center;
    color: #8C52E5
`