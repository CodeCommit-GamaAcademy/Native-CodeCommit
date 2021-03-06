import styled, { css } from 'styled-components/native';

interface TextInputProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
  isLastChild?: boolean;
}

export const ContainerTextInput = styled.View`
  position: relative;
`;

export const TextInput = styled.TextInput<TextInputProps>`
  color: #878686;
  border-color: #878686;
  border-style: solid;
  border-bottom-width: 1px;
  font-size: 14px;
  padding: 12px 6px;
  margin-bottom: ${({ isLastChild }) => (isLastChild ? 0 : 30)}px;

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      border-color: #68de5a;
    `}

  ${(props) =>
    props.isFilled &&
    css`
      border-color: #68de5a;
    `}
`;

export const ErrorText = styled.Text`
  color: #c53030;
  position: absolute;
  margin-top: 56px;
`;
