import { BottomTabBarOptions, BottomTabBarProps } from '@react-navigation/bottom-tabs';
import React from 'react';

import { Container, ItemLayout, LabelText, TouchableButton, TabContainer } from './style';
import { Ionicons } from '@expo/vector-icons';

interface MenuProps {
  menu: BottomTabBarProps<BottomTabBarOptions>
}

export default function Menu(props: MenuProps) {
  const { state, descriptors, navigation } = props.menu;
  
  return (
    <Container>
      <TabContainer>
        {state.routes.map( (route, index) => {
          
          let iconLogo;
          if (route.name === 'Transferir') {
            iconLogo = <Ionicons name="swap-horizontal-outline" size={30} color="white" />
          } else if (route.name === 'Lancamentos') {
            iconLogo = <Ionicons name="cash-outline" size={30} color="white" />
          } else if (route.name === 'Depositar') {
            iconLogo = <Ionicons name="cash-outline" size={30} color="white" />
          } else {
            iconLogo = <Ionicons name="cash-outline" size={30} color="white" />
          }

          const { options } = descriptors[route.key];
          const label = options.tabBarLabel !== undefined
          ? options.tabBarLabel
          : options.title !== undefined
          ? options.title
          : route.name;

          const isFocused = state.index === index;
          
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

        return (
          <TouchableButton
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            key={index}
          >
            <ItemLayout>
              {iconLogo}
              <LabelText 
                isFocused={ isFocused }
              >
                {label}
              </LabelText>
            </ItemLayout>
          </TouchableButton>
        )
      })}
      </TabContainer>
    </Container>
  );
}