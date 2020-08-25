import axios from 'axios';

const AxiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: 'https://mydreamjournal.herokuapp.com/api',
        headers: {
            Authorization: token
        }
    })
}

export default AxiosWithAuth;