import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Exclude, ExcludeText } from '../style';

export default function LeftContent() {
    return (
        <Exclude>
            <Icon name='trash' size={20} color='#FFF' />
            <ExcludeText>Delete</ExcludeText>
        </Exclude>
    );
};