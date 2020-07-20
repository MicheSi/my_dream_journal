import axios from 'axios';

const AxiosWithAuth = () => {
    const token = local.Storage.getItem('token');

    return axios.create({
        baseURL: 'https://localhost:4000/api',
        headers: {
            Authorization: token
        }
    })
}

export default AxiosWithAuth;