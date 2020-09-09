import {
    ADD_USER_LOADING,
    ADD_USER_SUCCESS,
    ADD_USER_FAILED,
    SIGNIN_USER_LOADING,
    SIGNIN_USER_SUCCESS,
    SIGNIN_USER_FAILED
}
from '../actions/userActions';

const initialState = {
    isLoading: false,
    error: '',
    username: '',
    password: ''
}

export const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_USER_LOADING:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case ADD_USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: '',
                username: action.payload,
                password: action.payload
            }
        case ADD_USER_FAILED:
            return {
                ...state,
                error: action.payload
            }
        case SIGNIN_USER_LOADING:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case SIGNIN_USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: '',
                username: action.payload,
                password: action.payload
            }
            case SIGNIN_USER_FAILED:
                return {
                    ...state,
                    error: action.payload
                }
        default:
            return state;
    }
}

