import axios from 'axios';
import axios2 from 'axios';
import { getToken } from '../common/utils';

const rota = 'http://127.0.0.1:3030/';

export const apiNotToken = axios2.create({
    baseURL: rota
});

export const api = axios.create({
    baseURL: rota
});

api.interceptors.request.use(
    config => {
        let access = getToken();

        return access.then(res => {
            if (res) config.headers.common.Authorization = `Bearer ${res}`;
            return config;
        })
    },
    error => {
        return Promise.reject(error);
    },
);

export default api;
