import styled from 'styled-components/native';

export const Container = styled.View`
flex: 1;
justify-content: center;
align-items: center;
background: #E5E5E5;

`;

export const Main = styled.SafeAreaView`
  flex: 1;
  background: #8C52E5;
`

export const BoxContent = styled.View`
width: 100%;
background: #fff;
width: 90%;
border-radius: 10px;
`;

export const TopTitle = styled.Text`

font-family: Roboto;
font-style: normal;
font-weight: 500;
font-size: 26px;
line-height: 30px;
display: flex;
align-items: center;
text-align: center;
`; 

export const CardTitle  = styled.Text`

font-family: Roboto;
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 21px;
/* identical to box height */

display: flex;
align-items: center;
text-align: left;
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
