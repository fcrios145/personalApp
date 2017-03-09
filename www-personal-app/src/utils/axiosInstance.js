import axios from 'axios'

export const baseURL = 'http://localhost:8000/'
export const client_id = 'a9m0Gqb2SiCArP8B9D1kacdUDKvVBo1kV8kQBrTZ'

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
