import { Alert } from 'react-native';

import { apiNotToken } from '../../../services/api';
import { setToken } from '../../../common/utils';

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

            setToken(res.data.token);

            navigation.navigate('Today');
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
