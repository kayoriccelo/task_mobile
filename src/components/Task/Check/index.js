import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';

import { View } from './style';


export default function Check(props) {
    return (
        <TouchableWithoutFeedback onPress={props.onPress}>
            <View>{props.label}</View>
        </TouchableWithoutFeedback>
    )
};
