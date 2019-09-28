import { Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import { apiNotToken } from '../../../services/api';

export const Types = {
    AUTH: 'signin/AUTH'
}

export const authenticate = (values, navigation) => dispatch => {
    apiNotToken.post('signin', { email: values['email'], password: values['password'] })
        .then(res => {
            dispatch({
                type: Types.AUTH,
                payload: res.data
            })

            AsyncStorage.setItem('access', res.data.access);

            navigation.navigate('Home');
        }, err => {
            Alert.alert('Erro', 'Falha ao Entrar!')
        });
};

export const initialState = {
    auth: {},
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case Types.AUTH:
            return { ...state, auth: action.payload };

        default:
            return state;
    };
};
