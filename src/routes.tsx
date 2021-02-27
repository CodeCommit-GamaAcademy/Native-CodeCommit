import React from 'react';
import { View } from 'react-native';
import { NavigationContainer, Route } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import Login from './screens/Login';

const { Navigator, Screen } = createStackNavigator();

const Routes: React.FC = () => {
    return (
        <NavigationContainer>
            <Navigator
                screenOptions={{ headerShown: false }}
            >
                {/* Rotas */}

                <Screen
                    component={Login}
                    name="Login"
                />

                <Screen
                    component={Home}
                    name="Home"
                />
            </Navigator>
        </NavigationContainer>
    );
}

export default Routes;