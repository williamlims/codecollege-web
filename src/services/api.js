import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3001',
    validateStatus: () => true,
});

export default api;