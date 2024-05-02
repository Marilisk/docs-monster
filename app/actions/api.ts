import axios from 'axios'

export const apiUrl = 'http://localhost:5000'


const api = axios.create({
    baseURL: apiUrl,  
    withCredentials: true, 
})


export default api

