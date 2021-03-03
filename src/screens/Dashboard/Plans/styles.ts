import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #8c52e5;

  justify-content: center;
  align-items: center;
  padding: 40px 25px 0px 25px;
`;

export const ContainerScroll = styled.ScrollView`
  flex: 1;
`;

export const HeaderWrapper = styled.View`
  padding-left: 20px;
  width: 100%;
`;

export const Main = styled.View`
  flex: 1;
  background: #8c52e5;
`;

export const PlansContainer = styled.ScrollView`
  background-color: #fff;
  width: 100%;
  border-radius: 10px;
  padding: 40px 25px 0px 25px;
  margin-top: -20px;
  margin-bottom: 20px;
`;

export const PlansCard = styled.View`
  border: 1px solid lightgray;
  border-radius: 8px;

  padding: 20px;

  margin-bottom: 40px;
`;

export const CardTitle = styled.Text`
  font-size: 20px;
  font-weight: 600;
`;
export const CardUser = styled.Text`
  color: #6c757d;
`;
export const CardType = styled.Text`
  font-size: 16px;
`;

export const PlusButton = styled.TouchableOpacity`
  margin-bottom: 70px;
  border: 1px solid lightgray;
  padding: 24px;

  justify-content: center;
  align-items: center;

  border-radius: 8px;

  background-color: #8c52e5;
`;

// Add Plans Modal

export const ModalContainer = styled.View`
  flex: 1;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 100;
  width: ${Dimensions.get('window').width}px;
  height: ${Dimensions.get('window').height}px;

  justify-content: center;
  align-items: center;
  padding: 0px 20px;
`;

export const ModalContent = styled.KeyboardAvoidingView`
  background-color: #fff;

  padding: 20px;
  width: 100%;
`;

export const TitleText = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;

  margin: 12px 0 24px 0;
`;

export const SpanTitle = styled.Text`
  font-size: 26px;
  color: #444444;
`;

export const SelectView = styled.View`
  width: 100%;
  padding: 0;

  border-bottom-width: 1px;
  border-bottom-color: #444444;
  margin-bottom: 24px;
`;

export const DescriptionWrapper = styled.View<{ hasContent: boolean }>`
  padding: 8px 18px;
  border: 1px solid ${(props) => (props.hasContent ? '#68DE5A' : '#444444')};
`;

export const DescriptionLabel = styled.Text`
  position: absolute;
  bottom: 2px;
  right: 2px;
  font-size: 8px;
  color: #999999;
`;

export const AddButton = styled.TouchableOpacity`
  width: 100%;

  border: 0;
  border-radius: 10px;
  background: #8c52e5;

  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin-top: 24px;
  padding: 16px 0px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-weight: 500;
  font-size: 16px;

  margin-left: 6px;
`;
