import types from '../actions/types';


const DEFAULT_STATE = {
    auth: false,
    errorMsg: '',
    error: false
}

function userReducer(state = DEFAULT_STATE, action) {
    switch (action.type) {
        case types.SIGN_IN:
            return { ...state, auth: true };
        case types.SIGN_IN_GUEST:
            return { ...DEFAULT_STATE };
        case types.SIGN_OUT:
            return { ...DEFAULT_STATE };
        case types.SIGN_IN_ERROR:
            return {...DEFAULT_STATE, errorMsg: action.errorMsg, error: true}
        default: return state;
    }
}

export default userReducer;