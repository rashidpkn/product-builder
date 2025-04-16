import axios from "axios";

let baseURL = '/api'

if (import.meta.env.MODE === 'development') {
    baseURL = 'https://productbuilder.my-thread.com/api'
}

const api = axios.create({
    baseURL
})

export { api }

