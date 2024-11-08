import axios from "axios";


// Converting an object from 'snake_case' to 'camelCase'
const toCamelCase = (obj: unknown): unknown => {
    if (Array.isArray(obj)) {
        return obj.map((v) => toCamelCase(v))
    } else if (obj && typeof obj === "object") {
        return Object.fromEntries(
            Object.entries(obj).map(([key, value]) => [
                key.replace(/_([a-z])/g, (g) => g[1].toUpperCase()),
                toCamelCase(value)
            ])
        )
    }
    return obj
}

const instance = axios.create({
    baseURL: 'https://sw-api.starnavi.io/',
})

instance.interceptors.response.use(
    (response) => {
        response.data = toCamelCase(response.data)
        return response
    },
    (error) => {
        console.error('Request error:', error.message);
        return Promise.reject(error)
    }
)

export default instance