import axios from "axios";

const getAuthToken = () => localStorage.getItem('token');
const authAxios = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}`,
    headers: { 'Content-Type': 'application/json' }
});

authAxios.interceptors.request.use((config) => {
    const token = getAuthToken();
    if(token) {
        config.headers.authorization = `Bearer ${token}`;
    }
    return config
}, (error) => Promise.reject(error));

export default authAxios;