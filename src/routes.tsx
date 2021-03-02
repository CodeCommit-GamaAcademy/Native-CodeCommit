import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, SafeAreaView } from 'react-native';

import TabRoutes from './routes/tabRoutes';
import Password from './screens/ForgotPassword';
import Login from './screens/Login';
import Register from './screens/Register';
import Succeded from './screens/Register/Succeded';
import Loader from './components/Loader';
import updateStore from './services/updateStore';
import ValidateCurrentToken from './services/ValidateCurrentToken';

const { Navigator, Screen } = createStackNavigator();

const Routes: React.FC = () => {
    const [ initialRoute, setInitialRoute ] = useState('Login');
    const [ isAppLoading, setIsAppLoading ] = useState(true);
    
    useEffect(() => {
        const GetAsyncStorage = async () => {
            await ValidateCurrentToken();

            const isLogged = await updateStore();
    
            if ( !isLogged ) setInitialRoute('Login');
            else setInitialRoute('Dashboard');
            
            setIsAppLoading(false);
        };    

        GetAsyncStorage();
    }, []);

    if ( !isAppLoading ) return (
        <NavigationContainer>
            <Navigator
                screenOptions={{ headerShown: false }}
                initialRouteName={ initialRoute }
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
    else return (
        <SafeAreaView
            style={ styles.loadingContainer }
        >
            <Loader marginTop={0} changeColor />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#8C52E5'
    }
});

export default Routes;