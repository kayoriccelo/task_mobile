import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import SignIn from '../apps/SignIn';
import SignUp from '../apps/SignUp';
import Home from '../apps/Home';

const MenuConfig = {
    initialRouteName: 'Today',
    // contentComponent: Menu,
    contentOptions: {
        labelStyle: {
            // fontFamily: commonStyles.fontFamily,
            fontWeight: 'normal',
            fontSize: 20
        },
        activeLabelStyle: {
            color: '#080',
        }
    }
}

const SubRoutes = createDrawerNavigator({
    Today: {
        name: 'Today',
        screen: props => 
            <Home title='Hoje' daysAhead={0} {...props} />,
        navigationOptions: {
            title: 'Hoje'
        }
    },
}, MenuConfig)

const Routes = createAppContainer(
    createSwitchNavigator({
        SignIn,
        SignUp,
        SubRoutes
    })
);

export default Routes;

