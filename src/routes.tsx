import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Menu from './components/Menu/Menu';
import Releases from './screens/Dashboard/Releases';
import Transfer from './screens/Dashboard/Transfer';
import Deposit from './screens/Dashboard/Deposit';
import Plans from './screens/Dashboard/Plans';

import Register from './screens/Register';

const { Navigator, Screen } = createStackNavigator();

const Routes: React.FC = () => {
    return (
        <NavigationContainer>
            <Navigator
                screenOptions={{ headerShown: false }}
            >
                {/* Rotas */}
                
                <Screen 
                    component={ Register }
                    name="Register"
                />

                <Screen 
                    component={ Transfer }
                    name="Transferir"
                />
                <Screen 
                    component={ Releases }
                    name="Lancamentos"
                />
                <Screen 
                    component={ Deposit }
                    name="Depositar"
                />
                <Screen 
                    component={ Plans }
                    name="Planos"
                />
            </Navigator>
        </NavigationContainer>
    );
}

export default Routes;