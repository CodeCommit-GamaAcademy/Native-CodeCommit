import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Releases from '../screens/Dashboard/Releases';
import Transactions from '../screens/Dashboard/Transactions';
import Plans from '../screens/Dashboard/Plans';

const { Navigator, Screen } = createBottomTabNavigator();

const TabRoutes: React.FC = () =>{

    return (
            <Navigator
                // tabBar={ props => <Menu menu={props}/>}
                screenOptions= {
                    {
                        tabBarVisible: false,
                    }
                }
            >
                {/* Rotas */}

                {/* <Screen
                    component={Home}
                    name="Home" /> */}
                <Screen
                    component={Releases}
                    name="Lancamentos"
                />
                <Screen
                    component={Transactions}
                    name="Transferir"
                    initialParams={{ routerType: 'transfer'}} 
                />
                <Screen
                    component={Transactions}
                    name="Depositar"
                    initialParams={{ routerType: 'deposit' }} 
                />
                <Screen
                    component={Plans}
                    name="Planos"
                />
            </Navigator>
    );
}

export default TabRoutes;