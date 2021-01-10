import axios from 'axios'

export const request = axios.create({
    baseURL: 'https://conduit.productionready.io'
})

export default ({
    store
}) => {
    request.interceptors.request.use(function (config) {
        if (store.state.user && store.state.user.token) {
            config.headers.Authorization = `Token ${store.state.user&&store.state.user.token}`
        }
        return config
    }, function (err) {
        return Promise.reject(err)
    })
}