import { SET_USER_INFO } from './constants';
const initState = {
    userLogIn: { name: 'helloquynh' },
};

function reducer(state, action) {
    switch (action.type) {
        case SET_USER_INFO:
            return {
                ...state,
                userInfo: action.payload,
            };
        default:
            throw new Error('Invalid action...');
    }
}

export { initState };
export default reducer;
