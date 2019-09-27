import styled from 'styled-components';
import { StyleSheet } from 'react-native';


export const Container = styled.View`
    ${props => props.style && props.style}
    width: 100%;
    height: 40px;
    background-color: #EEE;
    border-radius: 20px;
    flex-direction: row;
    align-items: center;
`;

export const TextInput = styled.TextInput`
    margin-left: 20px;
    width: 70%;
`;

export const styles = StyleSheet.create({
    icon: {
        color: '#333',
        marginLeft: 20
    }
});
