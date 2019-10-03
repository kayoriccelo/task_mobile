import axios from 'axios';
import axios2 from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

const rota = 'http://127.0.0.1:3030/';

export const apiNotToken = axios2.create({
    baseURL: rota
});

export const api = axios.create({
    baseURL: rota
});

async function getToken() {
    return await AsyncStorage.getItem('access');
};

api.interceptors.request.use(
    config => {
        let access = getToken();

        access.then(res => {
            if (res) config.headers.common.Authorization = `Bearer ${res}`;
        })       

        return config;
    },
    error => {
        return Promise.reject(error);
    },
);

export default api;
