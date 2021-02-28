import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    background: #8C52E5;
`;

export const Main = styled.SafeAreaView`
  flex: 1;
  background: #8C52E5;
`

export const MenuLeft = styled.SafeAreaView`
    position: absolute;
    display: flex;
    align-items: center;
    width: 80%;
    height: 100%;
    background: #FFFFFF;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 100;
`

export const MenuContainer = styled.SafeAreaView`
    background: #000000;
    opacity: 0.7;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 100;
`
