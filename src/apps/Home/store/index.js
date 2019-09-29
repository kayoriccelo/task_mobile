import api from '../../../services/api';
import { Alert } from 'react-native';


export const Types = {
    LOAD: 'home/LOAD',
};

export const load = days => dispatch => {
    const maxDate = moment().add({ days }).format('YYYY-MM-DD 23:59')

    return api.get(`tasks?date=${maxDate}`)
        .then(res => dispatch({ type: types.LOAD, payload: res.data })
            , err => Alert.alert(err));
};

export const create = (task) => dispatch => {
    return api.post(`tasks`, { desc: task.desc, estimateAt: task.date })
        .then(res => dispatch(load)
            , err => Alert.alert(err));
};

export const remove = () => {
    // 
};

export const initialState = {
    itens: [],
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case Types.LOAD:
            return { ...state, itens: action.payload };

        default:
            return state;
    };
};
