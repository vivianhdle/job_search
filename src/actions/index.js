import types from './types';
import axios from 'axios';

export const checkAuth = () => async dispatch => {
    const {data: success, email = '', guest} = await axios.get('/api/sign_in_check.php');
    if(success && guest){
        console.log(success);
        return dispatch({
            type: types.SIGN_IN,
            email
        })
    }

    return dispatch({
        type: types.SIGN_OUT
    })
}
export function signIn(user){
    return function(dispatch){
        axios.post('/api/sign_in.php',user).then(resp=>{
            if (resp.data.success){
                localStorage.setItem('signedIn',true);
                dispatch({
                    type:types.SIGN_IN,
                    email:resp.data.email
                }) 
            } else{
                dispatch({
                    type:types.SIGN_IN_ERROR
                })
            }
        })
    }
}
export function signOut(user){
    return function(dispatch){
        axios.get('/api/sessionclear.php').then(resp=>{
            if(resp.data.success){
                localStorage.removeItem('signedIn');
                dispatch({
                    type: types.SIGN_OUT
                })
            }
        })
    }
}
export function signUp(user){
    return function(dispatch){
        axios.post('/api/sign_up.php',user).then(resp=>{
            if (resp.data.success){
                localStorage.setItem('signedUp',true);
                dispatch({
                    type:types.SIGN_UP,
                    email:resp.data.email
                }) 
            } else{
                dispatch({
                    type:types.SIGN_UP_ERROR
                })
            }
        })
    }
}