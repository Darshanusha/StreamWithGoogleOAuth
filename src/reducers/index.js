import {combineReducers} from 'redux';
import authRed from './authRed';

export default combineReducers({
    auth: authRed
})
