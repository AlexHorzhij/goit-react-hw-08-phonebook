import axios from "axios";

export const instanceContacts = axios.create({
    baseURL: "https://connections-api.herokuapp.com",
});

export const signup = async (newUser) => {

    const { data } = await instanceContacts.post('/users/signup', newUser);
    instanceContacts.defaults.headers.common['Authorization'] = data.token;
    return data;
};

export const login = async (userLogin) => {
    const {data} = await instanceContacts.post('/users/login', userLogin);
    instanceContacts.defaults.headers.common['Authorization'] = data.token;
    return data;
};

export const logout = () => {
    const { data } = instanceContacts.post('/users/logout');
    return data;
};

export const currentUser = async (token) => {
    token ? instanceContacts.defaults.headers.common['Authorization'] = token
        : instanceContacts.defaults.headers.common['Authorization'] = '';
    const user = await instanceContacts.get('/users/current');
        return user;
};