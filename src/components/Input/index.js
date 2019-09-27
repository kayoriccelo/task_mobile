import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Container, TextInput, styles } from './style';

export default function Input(props) {
    return (
        <Container style={props.style}>
            <Icon name={props.icon} size={20} style={styles.icon} />
            <TextInput {...props} />
        </Container>
    );
};
