import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
    position: absolute;
    top: 0;
    left: 0;
    width: ${ Dimensions.get('window').width }px;
    height: ${ Dimensions.get('window').height }px;

    background: rgba(0, 0, 0, .4);

    z-index: 100;

    justify-content: center;
    align-items: center;

    padding: 0 20px;
`;

export const ModalContainer = styled.View`
    width: 100%;
    background: #fff;

    padding: 30px;
`

export const ModalTitle = styled.Text`
    text-align: center;
`

export const ButtonsWrapper = styled.View`
    flex-direction: row;
    justify-content: space-evenly;

    margin-top: 30px;
`

export const ButtonText = styled.Text`

`