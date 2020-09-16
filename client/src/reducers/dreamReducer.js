import {
    FETCH_DREAMS_LOADING,
    FETCH_DREAMS_SUCCESS,
    FETCH_DREAMS_FAILED,
    EDIT_DREAMS_LOADING,
    EDIT_DREAMS_SUCCESS,
    EDIT_DREAMS_FAILED,
    DELETE_DREAMS_LOADING,
    DELETE_DREAMS_SUCCESS,
    DELETE_DREAMS_FAILED,
    SET_NEXT_SUCCESS
}
from '../actions/dreamActions';

const id = localStorage.getItem('id')

const initialState = {
    isLoading: false,
    error: '',
    dreams: [],
    page: 1,
    next: ''
}

export const dreamReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_DREAMS_LOADING:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case FETCH_DREAMS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: '',
                dreams: action.payload
            }
        case FETCH_DREAMS_FAILED:
            return {
                ...state,
                error: action.payload
            }
        case SET_NEXT_SUCCESS:
            return {
                ...state,
                page: action.payload
            }
        case EDIT_DREAMS_LOADING:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case EDIT_DREAMS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: '',
                date: action.payload,
                description: action.payload
            }
        case EDIT_DREAMS_FAILED:
            return {
                ...state,
                error: action.payload
            }
        case DELETE_DREAMS_LOADING:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case DELETE_DREAMS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: '',
            }
        case DELETE_DREAMS_FAILED:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}

