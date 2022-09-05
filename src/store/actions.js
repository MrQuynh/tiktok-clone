import { SET_USER_INFO, USER_LOG_IN, SET_SUGGEST_ACCOUNTS } from './constants';

export const setUserInfo = (payload) => ({
    type: SET_USER_INFO,
    payload,
});
export const userLogIn = (payload) => ({
    type: USER_LOG_IN,
    payload,
});
export const setSuggestAccount = (payload) => ({
    type: SET_SUGGEST_ACCOUNTS,
    payload,
});
