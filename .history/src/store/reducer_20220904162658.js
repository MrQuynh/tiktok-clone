import { USER_LOG_IN } from './constants';
const initState = {
    userLogIn: {},
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
