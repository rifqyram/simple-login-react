import axios from "axios";
import TokenService from "./TokenService";

const {getLocalAccessToken, updateLocalAccessToken} = TokenService();

const client = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    }
})

client.interceptors.request.use(
    (config) => {
        const token = getLocalAccessToken();
        if (token) config.headers['Authorization'] = `Bearer ${token}`;
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
)

client.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const originalConfig = error.config;
        if (originalConfig.url !== '/auth/signin' && error.response) {
            if (error.response.status === 401 && !originalConfig._retry) {
                originalConfig._retry = true;
                const token = getLocalAccessToken();
                try {
                    const {data} = await client.post('auth/refresh-token', {token});
                    updateLocalAccessToken(data.accessToken);
                    return client(originalConfig);
                } catch (e) {
                    return Promise.reject(error);
                }
            }
        }
        return Promise.reject(error);
    }
);

export default client;