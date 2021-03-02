import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 100px 0 20px 0px;
  width: 90%;
`;

export const Welcome = styled.Text<{ fromReleases: boolean }>`
  font-weight: 500;
  font-size: 20px;
  color: ${ props => props.fromReleases ? '#8c52e5' : '#FFFFFF' };
`