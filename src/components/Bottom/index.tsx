import React from 'react';

import { Container, ItemLayout, LabelText, TouchableButton, TabContainer } from './style';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import LaunchsSvg from '../../assets/svgs/Launchs';
import DepositSvg from '../../assets/svgs/Deposit';
import PlansSvg from '../../assets/svgs/Plans';


export default function Bottom() {
  const navigator = useNavigation();

  return (
    <Container>
      <TabContainer>
          <TouchableButton
            accessibilityRole="button"
            onPress={() => navigator.navigate('Transferir')}
          >
            <ItemLayout>
              <Ionicons name="swap-horizontal-outline" size={25} color="white" />
              <LabelText 
                isFocused={ true }
              >
                Transferir
              </LabelText>
            </ItemLayout>
          </TouchableButton>
          <TouchableButton
            accessibilityRole="button"
            onPress={() => navigator.navigate('Lancamentos')}
          >
            <ItemLayout>
              <LaunchsSvg  />
              <LabelText 
                isFocused={ true }
              >
                Lancamentos
              </LabelText>
            </ItemLayout>
          </TouchableButton>
          <TouchableButton
            accessibilityRole="button"
            onPress={() => navigator.navigate('Depositar')}
          >
            <ItemLayout>
              <DepositSvg />
              <LabelText 
                isFocused={ true }
              >
                Depositar
              </LabelText>
            </ItemLayout>
          </TouchableButton>
          <TouchableButton
            accessibilityRole="button"
            isLastOne
            onPress={() => navigator.navigate('Planos')}
          >
            <ItemLayout>
              <PlansSvg />
              <LabelText 
                isFocused={ true }
              >
                Planos
              </LabelText>
            </ItemLayout>
          </TouchableButton>

      </TabContainer>
    </Container>
  );
}