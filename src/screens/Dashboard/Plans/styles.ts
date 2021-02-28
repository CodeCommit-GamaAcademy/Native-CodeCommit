import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color: #8C52E5;
    flex: 1;

    justify-content: center;
    align-items: center;
    padding-top: 50px;
    padding-left: 20px;
    padding-right: 20px;
`;

export const Main = styled.SafeAreaView`
  flex: 1;
  background: #8C52E5;
`

export const PlansContainer = styled.ScrollView`
    background-color: #fff;
    width: 100%;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    padding: 20px;
`

export const PlansCard = styled.View`
    border: 1px solid lightgray;
    border-radius: 8px;

    padding: 20px;

    margin-bottom: 40px;
`

export const CardTitle = styled.Text`
    font-size: 20px;
    font-weight: 600;
`
export const CardUser = styled.Text`
    color: #6C757D;
`
export const CardType = styled.Text`
    font-size: 16px;
`

export const PlusButton = styled.TouchableOpacity`
    margin-bottom: 50px;
    border: 1px solid lightgray;
    padding: 24px;

    justify-content: center;
    align-items: center;

    border-radius: 8px;

    background-color: #8C52E5;
`