import axios from 'axios'

export const http = axios.create({
    baseURL: "http://jsonserver.vm1.test:8888",
    headers:{
        "Accept": "application/json",
        "Content-Type": "application/json" 
    }
})
