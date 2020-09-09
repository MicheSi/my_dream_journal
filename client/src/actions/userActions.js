import AxiosWithAuth from '../utils/AxiosWithAuth';

export const ADD_USER_LOADING = 'ADD_USER_LOADING'
export const ADD_USER_SUCCESS = 'ADD_USER_SUCCESS'
export const ADD_USER_FAILED = 'ADD_USER_FAILED'

export const SIGNIN_USER_LOADING = 'SIGNIN_USER_LOADING'
export const SIGNIN_USER_SUCCESS = 'SIGNIN_USER_SUCCESS'
export const SIGNIN_USER_FAILED = 'SIGNIN_USER_FAILED'

export const addUser = () => dispatch => {
    dispatch({type: ADD_USER_LOADING})
    AxiosWithAuth()
    .post('/auth/register')
    .then(res => {
        dispatch({type: ADD_USER_SUCCESS, payload: res.data})
    })
    .catch(err => {
        dispatch({type: ADD_USER_FAILED, payload: err.response})
    })
}

export const signinUser = () => dispatch => {
    dispatch({type: SIGNIN_USER_LOADING})
    AxiosWithAuth()
    .post('/auth/signin')
    .then(res => {
        dispatch({type: SIGNIN_USER_SUCCESS, payload: res.data})
    })
    .catch(err => {
        dispatch({type: SIGNIN_USER_FAILED, payload: err.response})
    })
}