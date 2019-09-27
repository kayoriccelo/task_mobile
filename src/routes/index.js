import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import SignIn from '../apps/SignIn';
import SignUp from '../apps/SignUp';
import Home from '../apps/Home';

const Routes = createAppContainer(
    createSwitchNavigator({
        SignIn,
        SignUp,
        Home
    })
);

export default Routes;

