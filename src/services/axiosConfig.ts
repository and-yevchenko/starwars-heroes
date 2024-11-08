import axios from "axios";


const instance = axios.create({
    baseURL: 'https://sw-api.starnavi.io/',
})

export default instance