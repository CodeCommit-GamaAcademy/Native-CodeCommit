import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import Login from './screens/Login';
import { NavigationContainer } from '@react-navigation/native';
import Releases from './screens/Dashboard/Releases';
import Transfer from './screens/Dashboard/Transfer';
import Deposit from './screens/Dashboard/Deposit';
import Plans from './screens/Dashboard/Plans';
import Password from './screens/ForgotPassword';
import TabRoutes from '../src/routes/tabRoutes';

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
                    component={Login}
                    name="Login"
                />
                
                <Screen 
                    component={ Register }
                    name="Register"
                />
                <Screen 
                    component={Password}
                    name="ForgetPassword"
                />
                <Screen
                    component={Home}
                    name="Home" />
                <Screen
                    component={TabRoutes}
                    name="Transferir"
                    options={{ gestureEnabled: false}}
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