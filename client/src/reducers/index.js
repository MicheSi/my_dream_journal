import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { dreamReducer } from './dreamReducer';

export default combineReducers({
    userReducer,
    dreamReducer
});
