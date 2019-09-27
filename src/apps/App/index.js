import React from 'react';
import { YellowBox } from 'react-native';
import { Provider } from 'react-redux';

import store from '../../store';
import Routes from '../../routes';

YellowBox.ignoreWarnings(['Unrecognized WebSocket']);

export default function App() {
    return (
        <Provider store={store}>
            <Routes />
        </Provider>
    );
};
