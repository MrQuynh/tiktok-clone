import { USER_LOG_IN } from './constants';
// const user_log_in = localStorage.getItem('USER_LOG_IN');

const initState = {
    userLogIn: { name: 'quynh' },
};

function reducer(state, action) {
    switch (action.type) {
        case USER_LOG_IN:
            // localStorage.setItem('USER_LOG_IN', JSON.stringify(action.payload));
            return {
                data: action.payload,
            };
        default:
            throw new Error('Invalid action...');
    }
}

export { initState };
export default reducer;
