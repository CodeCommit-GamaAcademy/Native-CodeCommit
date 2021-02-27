import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screens/Home';
import Menu from './components/Menu/Menu';
import Releases from './screens/Dashboard/Releases';
import Transfer from './screens/Dashboard/Transfer';
import Deposit from './screens/Dashboard/Deposit';
import User from './components/User';
// import Plans from './screens/Dashboard/Plans';

const { Navigator, Screen } = createBottomTabNavigator();

const Routes: React.FC = () => {
    return (
        <NavigationContainer>
            <Navigator
                tabBar={ props => <Menu menu={props}/>}
            >
                {/* Rotas */}

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
                {/* <Screen 
                    component={ Plans }
                    name="Planos"
                /> */}
            </Navigator>
        </NavigationContainer>
    );
}

export default Routes;