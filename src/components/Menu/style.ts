import styled from 'styled-components/native';

export const Container = styled.View`
  background: #8c52e5;
`

export const TabContainer = styled.View`
  flex-direction: row;
  background-color: #68DE5A;
  height: 80px;
  border-top-left-radius: 19px;
  border-top-right-radius: 19px;
`;

export const ItemLayout = styled.View`
    justify-content: center;
    align-items: center;
    height: 100%;
`

export const LabelText = styled.Text<{ isFocused: boolean }>`
    color: ${ props => props.isFocused ? '#FFFFFF' : '#FFFFFA' };
    font-size: 12px;
`

export const TouchableButton = styled.TouchableOpacity`
  flex: 1;
`