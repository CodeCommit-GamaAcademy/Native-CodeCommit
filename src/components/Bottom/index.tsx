import React, { useCallback } from 'react';

import { Container, ItemLayout, LabelText, TouchableButton, TabContainer } from './style';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import LaunchsSvg from '../../assets/svgs/Launchs';
import DepositSvg from '../../assets/svgs/Deposit';
import PlansSvg from '../../assets/svgs/Plans';
import { useSelector } from 'react-redux';
import { ApplicationStore } from '../../store';


export default function Bottom() {
  const navigator = useNavigation();

  const { currentScreen } = useSelector((store: ApplicationStore) => store.app);

  const handleChangePage = useCallback((RouteName: string, optionsToNavige?: object) => {
    if ( RouteName !== currentScreen ) navigator.navigate(RouteName, optionsToNavige);
  }, [ currentScreen, navigator ]);
  
  return (
    <Container>
      <TabContainer>
          <TouchableButton
            accessibilityRole="button"
            onPress={() => handleChangePage('Transferir', { routerType: 'transfer' })  }
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
            onPress={() => handleChangePage('Lancamentos')}
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
            onPress={() => handleChangePage('Depositar', { routerType: 'deposit' })}
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
            onPress={() => handleChangePage('Planos')}
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