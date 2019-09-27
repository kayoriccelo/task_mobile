import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Exclude } from '../style';

export default function RightContent(props) {
    return (
        <Exclude
            style={'justify-content: flex-start; padding-left: 20;'}
            onPress={props.onPress}
        >
            <Icon name='trash' size={30} color='#FFF' />
        </Exclude>
    );
};
