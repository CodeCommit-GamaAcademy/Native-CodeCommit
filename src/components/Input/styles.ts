import styled, { css } from 'styled-components/native';

interface TextInputProps {
  isFocused: boolean;
  isFilled: boolean;
  idLastChild?: boolean;
}

export const TextInput = styled.TextInput<TextInputProps>`
  color: #878686;
  border-color: #878686;
  border-style: solid;
  border-bottom-width: 1px;
  font-size: 14px;
  padding: 12px 6px;
  /* margin-bottom: ${({ isLastChild }) => (isLastChild ? 0 : 60)}px; */

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
