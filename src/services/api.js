import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

const rota = 'http://127.0.0.1:3333'

export const apiNotToken = axios.create({
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

        if (access) {
            config.headers.common.Authorization = `Bearer ${access}`;
        }

        return config;
    },
    error => {
        return Promise.reject(error);
    },
);

export default api;
