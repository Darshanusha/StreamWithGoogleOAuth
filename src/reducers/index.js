import {combineReducers} from 'redux';
import authRed from './authRed';
import { reducer as formReducer } from 'redux-form';
import streamReducer from './streamReducer';

export default combineReducers({
    auth: authRed,
    form: formReducer,
    streamReducer: streamReducer,
})
