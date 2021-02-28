import React from 'react';

import { Container, ItemLayout, LabelText, TouchableButton, TabContainer } from './style';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


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
              <Ionicons name="swap-horizontal-outline" size={25} color="white" />
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
              <Ionicons name="swap-horizontal-outline" size={25} color="white" />
              <LabelText 
                isFocused={ true }
              >
                Depositar
              </LabelText>
            </ItemLayout>
          </TouchableButton>
          <TouchableButton
            accessibilityRole="button"
            onPress={() => navigator.navigate('Planos')}
          >
            <ItemLayout>
              <Ionicons name="swap-horizontal-outline" size={25} color="white" />
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