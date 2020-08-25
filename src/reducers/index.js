import {combineReducers} from 'redux';
import authRed from './authRed';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
    auth: authRed,
    form: formReducer
})
