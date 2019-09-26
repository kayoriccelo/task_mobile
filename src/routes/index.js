import React from 'react';
import { createSwitchNavigator } from 'react-navigation';

import Home from '../apps/Home';

const MenuMain = {
    Home: {
        name: 'Home',
        screen: Home
    }
};

export default createSwitchNavigator(MenuMain, { initialRouteName: 'Loading' });
