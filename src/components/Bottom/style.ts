import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  background: #8c52e5;
  width: 100%;
  z-index: 2;
`;

export const TabContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #68de5a;
  height: 80px;
  border-top-left-radius: 19px;
  border-top-right-radius: 19px;
`;

export const ItemLayout = styled.View`
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const LabelText = styled.Text<{ isFocused: boolean }>`
  color: ${(props) => (props.isFocused ? '#FFFFFF' : '#FFFFFA')};
  font-size: 12px;
  margin-top: 4px;
`;

export const TouchableButton = styled.TouchableOpacity<{ isLastOne?: boolean }>`
  flex: 1;
  /* ${(props) =>
    !props.isLastOne &&
    `
    border-right-width: .5px;
    border-right-color: lightgray;
  `} */
`;
