import axios from 'axios';

const devInstance = 'http://localhost:4000'

export const http = axios.create({
    baseURL: devInstance,
    headers: {
        'Content-Type': 'application/json',
    }
})
