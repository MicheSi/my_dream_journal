import axios from 'axios';
import AxiosWithAuth from '../utils/AxiosWithAuth';

export const FETCH_USER_LOADING = 'FETCH_USER_LOADING'
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS'
export const FETCH_USER_FAILED = 'FETCH_USER_FAILED'

export const fetchUser = () => dispatch => {
    dispatch({type: FETCH_USER_LOADING})
    return
}