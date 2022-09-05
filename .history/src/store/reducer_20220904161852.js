import { USER_LOG_IN } from './constants';
const initState = {
    userLogIn: { data: '' },
};

function reducer(state, actions) {
    switch (actions.type) {
        case USER_LOG_IN:
            return {
                ...state,
                data: actions.payload,
            };
        default:
            throw new Error('Invalid action...');
    }
}

export { initState };
export default reducer;
