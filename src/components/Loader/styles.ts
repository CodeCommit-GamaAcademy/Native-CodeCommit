import styled from 'styled-components/native';

export const LoaderContainer = styled.ActivityIndicator<{ marginTop: number }>`
  margin-top: ${(props) => props.marginTop}px;
`;
