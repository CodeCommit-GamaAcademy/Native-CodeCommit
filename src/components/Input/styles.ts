import styled from 'styled-components/native';

export const TextInput = styled.TextInput<{ idLastChild?: boolean }>`
  color: #878686;
  border-color: #878686;
  border-style: solid;
  border-bottom-width: 1px;
  font-size: 14px;
  padding: 12px 6px;
  /* margin-bottom: ${({ isLastChild }) => (isLastChild ? 0 : 60)}px; */
`;
