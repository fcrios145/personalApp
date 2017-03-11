import axios from 'axios'

export const baseURL = 'http://localhost:8000/'
export const client_id = 'nEiljUX9w8zCoQvFbAInsSCpUcPBfaAh5LBCHnbo'

let instance = axios.create({
  baseURL: baseURL + 'api/v1/',
});

instance.interceptors.request.use( (config) => {
  config.headers.Authorization = 'Bearer ' + localStorage.token
  return config
}, (error) => {
  return Promise.reject(error)
})


export default instance
