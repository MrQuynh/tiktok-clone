import { USER_LOG_IN } from './constants';
const user_log_in = localStorage.getItem('USER_LOG_IN') ? {} : null;

const initState = {
    userLogIn: user_log_in,
};

function reducer(state, action) {
    switch (action.type) {
        case USER_LOG_IN:
            return {
                data: action.payload,
            };
        default:
            throw new Error('Invalid action...');
    }
}

export { initState };
export default reducer;
