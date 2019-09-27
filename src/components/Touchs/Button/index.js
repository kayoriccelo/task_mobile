import React from 'react';
import { TouchableOpacity } from 'react-native';

import { View, Text } from './style';


export default function Button(props) {
    return (
        <TouchableOpacity disabled={!props.validForm} onPress={props.onPress}>
            <View valid={!props.validForm}>
                <Text>
                    {props.label}
                </Text>
            </View>
        </TouchableOpacity>
    );
};
