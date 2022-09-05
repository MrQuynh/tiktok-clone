import { USER_LOG_IN, SET_SUGGEST_ACCOUNTS } from './constants';
const user_log_in = localStorage.getItem('USER_LOG_IN');

const initState = [{ userLogIn: user_log_in ?? null, status: user_log_in ? true : false }, { suggestAccount: [] }];

function reducer(state, action) {
    switch (action.type) {
        case USER_LOG_IN:
            return {
                data: action.payload,
            };
        case SET_SUGGEST_ACCOUNTS:
            return {
                data: action.payload,
            };
        default:
            throw new Error('Invalid action...');
    }
}

export { initState };
export default reducer;
