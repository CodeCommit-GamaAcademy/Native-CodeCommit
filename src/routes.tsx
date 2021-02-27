import React from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import Login from './screens/Login';
import { NavigationContainer } from '@react-navigation/native';
import Menu from './components/Menu/Menu';
import Releases from './screens/Dashboard/Releases';
import Transfer from './screens/Dashboard/Transfer';
import Deposit from './screens/Dashboard/Deposit';
import Plans from './screens/Dashboard/Plans';

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
                    name="Home" />
                <Screen
                    component={Transfer}
                    name="Transferir"
                />
                <Screen
                    component={Releases}
                    name="Lancamentos"
                />
                <Screen
                    component={Deposit}
                    name="Depositar"
                />
                <Screen
                    component={Plans}
                    name="Planos"
                />
            </Navigator>
        </NavigationContainer>
    );
}

export default Routes;