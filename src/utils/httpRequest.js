import axios from 'axios';
const linkApi = 'https://tiktok.fullstack.edu.vn/api/';
const accessToken = localStorage.getItem('TOKEN') ?? null;
const request = axios.create({
    baseURL: { linkApi },
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${accessToken}`,
    },
});
request.interceptors.response.use(function (response) {
    return response;
});

export const get = async (path, options = {}) => {
    const response = await request.get(path, options);
    return response.data;
};

export const post = async (path, options = {}) => {
    const response = await request.post(path, options);
    return response.data;
};

export default request;
