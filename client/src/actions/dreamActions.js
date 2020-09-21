import AxiosWithAuth from '../utils/AxiosWithAuth';

export const FETCH_DREAMS_LOADING = 'FETCH_DREAM_LOADING'
export const FETCH_DREAMS_SUCCESS = 'FETCH_DREAM_SUCCESS'
export const FETCH_DREAMS_FAILED = 'FETCH_DREAM_FAILED'

export const SET_NEXT_SUCCESS = 'SET_NEXT_SUCCESS'

export const EDIT_DREAMS_LOADING = 'EDIT_DREAM_LOADING'
export const EDIT_DREAMS_SUCCESS = 'EDIT_DREAM_SUCCESS'
export const EDIT_DREAMS_FAILED = 'EDIT_DREAM_FAILED'

export const DELETE_DREAMS_LOADING = 'DELETE_DREAM_LOADING'
export const DELETE_DREAMS_SUCCESS = 'DELETE_DREAM_SUCCESS'
export const DELETE_DREAMS_FAILED = 'DELETE_DREAM_FAILED'

export const fetchDreams = () => dispatch => {
    const id = localStorage.getItem('id')
    const page = 1
    const limit = 10

    dispatch({type: FETCH_DREAMS_LOADING})
    return AxiosWithAuth()
    .get(`/dreams/users/${id}?page=${page}&limit=${limit}`)
    .then(res => {
        dispatch({type: FETCH_DREAMS_SUCCESS, payload: res.data.dreamResults})
        // dispatch({type: SET_NEXT_SUCCESS, payload: res.data.next})
        return res.data.dreamResults
    })
    .catch(err => {
        dispatch({type: FETCH_DREAMS_FAILED, payload: err.response})
    })
}

export const editDreams = (props) => dispatch => {
    dispatch({type: EDIT_DREAMS_LOADING})
    AxiosWithAuth()
    .put(`/dreams/${props.id}`)
    .then(res => {
        dispatch({type: EDIT_DREAMS_SUCCESS, payload: res.data})
        window.location.reload()
    })
    .catch(err => {
        dispatch({type: EDIT_DREAMS_FAILED, payload: err.response})
    })
}

export const deleteDreams = (props) => dispatch => {
    dispatch({type: DELETE_DREAMS_LOADING})
    AxiosWithAuth()
    .delete(`/dreams/${props.id}`)
    .then(res => {
        dispatch({type: DELETE_DREAMS_SUCCESS, payload: res.data})
        window.location.reload()
    })
    .catch(err => {
        dispatch({type: DELETE_DREAMS_FAILED, payload: err.response})
    })
}