import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/Login';
import { NavigationContainer } from '@react-navigation/native';
import Password from './screens/ForgotPassword';
import TabRoutes from './routes/tabRoutes';

import Register from './screens/Register';
import Succeded from './screens/Register/Succeded';

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
                    name="RegisterSucceded"
                    component={ Succeded }
                />

                <Screen 
                    component={Password}
                    name="ForgetPassword"
                />
                
                <Screen
                    component={TabRoutes}
                    name="Dashboard"
                    options={{ gestureEnabled: false}}
                />
            </Navigator>
        </NavigationContainer>
    );
}

export default Routes;