import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Touchable } from '../style';

export default function RightContent(props) {
    return (
        <Touchable
            style={'justify-content: flex-start; padding-left: 20;'}
            onPress={props.onPress}
        >
            <Icon name='trash' size={30} color='#FFF' />
        </Touchable>
    );
};
