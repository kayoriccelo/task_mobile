import React from 'react';
import { createSwitchNavigator } from 'react-navigation';

import SignIn from '../apps/SignIn';
import Home from '../apps/Home';

const MenuMain = {
    SignIn: {
        name: 'Sign In',
        screen: SignIn
    },
    Home: {
        name: 'Home',
        screen: Home
    }
};

export default createSwitchNavigator(MenuMain, { initialRouteName: 'Loading' });
