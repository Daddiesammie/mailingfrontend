import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8000/api'
});

export const submitUserForm = async (userData) => {
    return await api.post('/submissions/', userData);
};

export const getTemplates = async () => {
    return await api.get('/templates/');
};

export const getSubmissions = async () => {
    return await api.get('/submissions/');
};

export const sendEmail = async (data) => {
    return await api.post('/send-mail/', data);
};
