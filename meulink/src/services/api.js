import axios from 'axios';

export const key = "ce972ea324717ec671bbe31130a674b0dd9fa9d8";

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4/',
    headers:{
        'Authorization': `Bearer ${key}`
    }
})

export default api;