import React from 'react';
import { View } from 'react-native';

import { TextDesc, TextDate } from './style';


export default function Line(props) {
    return (
        <View>
            <TextDesc descStyle={props.descStyle}>
                {props.desc}
            </TextDesc>
            <TextDate>
                {moment(props.date).locale('pt-br').format('ddd, D [de] MMMM [de] YYYY')}
            </TextDate>
        </View>
    );
};