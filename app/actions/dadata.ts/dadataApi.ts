import axios from 'axios';

const API_URL = 'http://suggestions.dadata.ru/'
const token = '0169a6da29c28c56ecd2a7b2df5463ee2a77460d'

const dadataApi = axios.create({
    baseURL: API_URL,  
    // withCredentials: true,  
    // method: 'POST',
    
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": "Token " + token
    },
})


export default dadataApi;