import axios from "axios"
// axios.defaults.baseURL = import.meta.env.VITE_STOCK_INDIAN_API_BASE_URL

/* Handle axios Request */
axios.interceptors.request.use((config) => {
    const api_key = import.meta.env.VITE_STOCK_INDIAN_API_KEY
    if (api_key) {
        config.headers['x-api-key'] = api_key
    }
    return config
})

/** API Requests Handlers*/
const request = {
    get: async (url) => (await axios.get(url)).data,
    post: async (url, body) => (await axios.post(url, body)).data,
    put: async (url, body) => (await axios.put(url, body)).data,
    delete: async (url) => (await axios.delete(url)).data,
}

/** Account */
const Account = {
    fetchFn: (url) => request.get(url),
    postFn: (url, body) => request.post(url, body),
    updateFn: (url, body) => request.put(url, body),
    deleteFn: (url) => request.delete(url)
}

const api = { Account }
export default api