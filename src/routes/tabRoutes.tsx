import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Menu from '../components/Menu/Menu';
import Releases from '../screens/Dashboard/Releases';
import Transfer from '../screens/Dashboard/Transfer';
import Deposit from '../screens/Dashboard/Deposit';
import Plans from '../screens/Dashboard/Plans';

const { Navigator, Screen } = createBottomTabNavigator();

const TabRoutes: React.FC = () =>{
    return (
            <Navigator
                tabBar={ props => <Menu menu={props}/>}
            >
                {/* Rotas */}

                {/* <Screen
                    component={Home}
                    name="Home" /> */}
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
    );
}

export default TabRoutes;