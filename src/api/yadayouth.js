import axios from 'axios';

const yadayouth = axios.create({
    baseURL : 'https://yadayouth-backend.vercel.app'
})

export default yadayouth;