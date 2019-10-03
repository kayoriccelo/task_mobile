import AsyncStorage from '@react-native-community/async-storage';


export const setToken = async (token) => {
    try {
        await AsyncStorage.setItem('@task_token', token);
    } catch (e) {
        console.log('error set item Token.');
    };
};

export const getToken = async () => {

    const value = await AsyncStorage.getItem('@task_token');

    if (value !== null) {
        return value;
    };
};
