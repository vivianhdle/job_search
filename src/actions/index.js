import types from './types';
import axios from 'axios';

export const checkAuth = () => dispatch => {
    axios.get('/api/sign_in_check.php').then(resp=>{
        const { success } = resp.data
        if (success) {
            return dispatch({
                type: types.SIGN_IN
            })
        }
        return dispatch({
            type: types.SIGN_OUT
        })
    })
}
export function signUpNewGuest() {
    return function (dispatch) {
        return axios.post('/api/sign_up_guest.php').then(resp => {
            if (resp.data.success) {
                localStorage.setItem('guest_id', resp.data.guest);
                dispatch({
                    type: types.SIGN_IN_GUEST
                })
            } else {
                dispatch({
                    type: types.SIGN_IN_GUEST_ERROR
                })
            }
        }).then(() => {
            const guest_id = localStorage.getItem('guest_id');
            axios.post('/api/sign_in_guest.php', { guest_id }).then(nextResp => {
                if (nextResp.data.success) {
                    localStorage.setItem('guestSignedIn', true);
                    localStorage.setItem('newGuestStats', true);
                    localStorage.setItem('newGuestAdd', true);
                    localStorage.setItem('newGuestView', true);
                    localStorage.setItem('newGuestEdit', true);
                    dispatch({
                        type: types.SIGN_IN_GUEST
                    })
                } else {
                    dispatch({
                        type: types.SIGN_IN_GUEST_ERROR
                    })
                }
            })
        })
    }
}
export function signInGuest(user) {
    return function (dispatch) {
        const guest_id = localStorage.getItem('guest_id');
        return axios.post('/api/sign_in_guest.php', { guest_id }).then(resp => {
            if (resp.data.success) {
                localStorage.setItem('guestSignedIn', true);
                dispatch({
                    type: types.SIGN_IN_GUEST
                })
            } else {
                dispatch({
                    type: types.SIGN_IN_GUEST_ERROR
                })
            }
        })
    }
}
export function signIn(user) {
    return function (dispatch) {
        axios.post('/api/sign_in.php', user).then(resp => {
            if (resp.data.success) {
                localStorage.removeItem('guestSignedIn');
                localStorage.setItem('signedIn', true);
                dispatch({
                    type: types.SIGN_IN
                })
            } else {
                dispatch({
                    type:types.SIGN_IN_ERROR,
                    errorMsg: resp.data.error
                })

            }
        })
    }
}

export function clearAuthError(){
    return {
        type: types.CLEAR_AUTH_ERROR
    }
}

export function signOut(user) {
    return function (dispatch) {
        axios.get('/api/sign_out.php').then(resp => {
            if (resp.data.success) {
                localStorage.removeItem('signedIn');
                dispatch({
                    type: types.SIGN_OUT
                })
            }
        })
    }
}
export function signUp(user) {
    return function (dispatch) {
        axios.post('/api/sign_up.php', user).then(resp => {
            if (resp.data.success) {
                dispatch({
                    type: types.SIGN_UP
                })
            } else {
                dispatch({
                    type: types.SIGN_UP_ERROR,
                    errorMsg: resp.data.error
                })
            }
        })
    }
}