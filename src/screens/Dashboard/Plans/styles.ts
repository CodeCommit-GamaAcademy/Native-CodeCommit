import { Dimensions } from 'react-native';
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

// Add Plans Modal

export const ModalContainer = styled.SafeAreaView`
    flex: 1;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, .4);
    z-index: 100;
    width: ${ Dimensions.get('window').width }px;
    height: ${ Dimensions.get('window').height }px;

    justify-content: center;
    align-items: center;
    padding: 0px 20px;
`

export const ModalContent = styled.KeyboardAvoidingView`
    background-color: #fff;

    padding: 20px;
    width: 100%;
`

export const ModalTitle = styled.View`
    justify-content: center;
    align-items: center;
`
export const TitleText = styled.Text`
    justify-content: center;
    align-items: center;

    font-size: 24px;
`

export const SelectView = styled.View`
    width: 100%;
    padding: 0;
`

export const TextArea = styled.TextInput`

`

export const AddButton = styled.TouchableOpacity`

`

export const ButtonText = styled.Text`

`