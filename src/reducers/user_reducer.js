import types from '../actions/types';

const DEFAULT_STATE = {
    auth:false,
    email:''
}


function userReducer(state=DEFAULT_STATE,action){
    switch(action.type){
        default:return state;
    }
}


export default userReducer;