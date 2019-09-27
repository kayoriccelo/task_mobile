import React from 'react';
import { TouchableOpacity } from 'react-native';

import { Text } from './style';


export default function Link(props) {
    return (
        <TouchableOpacity style={{ padding: 10 }} onPress={props.onPress}>
            <Text>
                {props.label}
            </Text>
        </TouchableOpacity>
    );
};
