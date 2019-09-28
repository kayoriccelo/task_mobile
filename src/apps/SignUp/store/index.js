import { Alert } from 'react-native';
import { apiNotToken } from '../../../services/api';

export const Types = {
    CREATED: 'signup/CREATED'
}

export const create = (values, navigation) => dispatch => {
    apiNotToken.post('signup', { name: values['name'], email: values['email'], password: values['password'] })
        .then(res => {
            dispatch({
                type: Types.CREATED,
                payload: res.data
            })
            
            Alert.alert('Sucesso!', 'Usuário cadastrado.')

            navigation.navigate('SignIn');
        })
        .catch(err => {
            Alert.alert('Erro', 'Falha ao Registrar!' + err)
        });
};

export const initialState = {
    user: {},
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case Types.CREATED:
            return { ...state, user: action.payload };

        default:
            return state;
    };
};
