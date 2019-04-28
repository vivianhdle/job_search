import types from './types';
import axios from 'axios';


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


// export function signUp(user){
//     return function(dispatch){
//         axios.post('/api/sign-up.php',)
//     }
// }