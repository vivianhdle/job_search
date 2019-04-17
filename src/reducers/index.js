import {combineReducers} from 'redux';
import addFormReducer from './add-card-reducer';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
    form: formReducer,
    add: addFormReducer
});

export default rootReducer;
