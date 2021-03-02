import React from 'react';
import { Provider } from 'react-redux';
import Routes from './src/routes';
import store from './src/store';
import theme from './src/styles/theme';
import { ThemeProvider } from 'styled-components'
import { ToastProvider } from 'react-native-styled-toast'

export default function App() {
    return (
        <Provider
            store={store}
        >
            <ThemeProvider theme={theme}>
                <ToastProvider>
                    <Routes />
                </ToastProvider>
            </ThemeProvider>
            
        </Provider>
    );
}
