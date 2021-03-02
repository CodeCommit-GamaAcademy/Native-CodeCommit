import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
    position: absolute;
    top: 0;
    left: 0;
    width: ${ Dimensions.get('window').width }px;
    height: ${ Dimensions.get('window').height }px;

    background: rgba(0, 0, 0, .4);

    z-index: 2000;

    justify-content: center;
    align-items: center;

    padding: 0 20px;
`;

export const ModalContainer = styled.View`
    width: 100%;
    background: #fff;

    padding: 40px 20px;
`

export const ModalTitle = styled.Text`
    text-align: center;

    font-size: 21px;
    font-weight: bold;
    color: #444444;

    border-bottom-width: 1px;
    border-bottom-color: #999999;
    padding-bottom: 6px;
`

export const ButtonsWrapper = styled.View`
    flex-direction: row;
    justify-content: space-evenly;

    margin-top: 50px;
`

export const ButtonContainer = styled.View<{ isAcceptButton?: boolean }>`
    border-width: 1px;
    border-color: ${props => props.isAcceptButton ? '#68DE5A' : '#8C52E5'};
    border-radius: 8px;
`

export const ButtonText = styled.Text`
    font-size: 18px;
    color: #444444;
`