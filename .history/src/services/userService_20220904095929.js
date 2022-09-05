import * as request from '~/utils/httpRequest';

export const getSuggested = async ({ page, perPage }) => {
    try {
        const res = await request.get('users/suggested', {
            params: {
                page,
                per_page: perPage,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
export const getAnUser = async (nicknameValue) => {
    try {
        const res = await request.get(`users${nicknameValue}`);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
export const postLogin = async (dataSend) => {
    try {
        const res = await request.post('auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: dataSend,
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
