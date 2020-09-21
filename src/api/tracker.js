import axios from 'axios'
import { AsyncStorage } from 'react-native'

const instance = axios.create({
    baseURL: 'http://3e6c53d1296f.ngrok.io'
});

instance.interceptors.request.use(
    // First function is for success
    async (config) => {
        const token = await AsyncStorage.getItem('token')
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    // Second function is for ANY errors
    (err) => {
        return Promise.reject(err)
    }
)

export default instance;