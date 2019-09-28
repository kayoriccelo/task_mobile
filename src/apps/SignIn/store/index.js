import AsyncStorage from '@react-native-community/async-storage';

import { apiNotToken } from '../../../services';

export const Types = {
    AUTH: 'signin/AUTH'
}

export const authenticate = (email, password, navigation) => dispatch => {
    apiNotToken.post('signin', { email, password })
        .then(res => {
            dispatch({
                type: Types.AUTH,
                payload: res.data
            })

            AsyncStorage.setItem('access', res.data.access);

            navigation.navigate('Home');
        })
        .catch(err => {

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
