import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background: #8c52e5;
`;

export const Main = styled.View`
  flex: 1;
  background: #8c52e5;
`;

export const MainContainer = styled.ScrollView`
  flex: 1;
  background: #8c52e5;
`;

export const MenuLeft = styled.SafeAreaView`
  position: absolute;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-bottom: 100px;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
`;

export const MenuContainer = styled.ScrollView``;

export const Paragraph = styled.Text`
  align-self: flex-start;
  font-size: 12px;
  color: #9b9b9b;
`;

export const Value = styled.Text`
  align-self: flex-start;
  margin-bottom: 20px;
  margin-right: 10px;
  font-size: 16px;
  font-weight: 500;
  color: #8c52e5;
`;

export const Line = styled.View`
  margin-top: 50px;
  margin-bottom: 50px;
  align-self: center;
  background: #9b9b9b;
  height: 1px;
  width: ${Dimensions.get('window').width - 160}px;
`;

export const LogoutButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const LogoutText = styled.Text`
  margin-left: 6px;
  color: #8c52e5;
`;
