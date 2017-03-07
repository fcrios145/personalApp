//CategoriaActions.js
import axios from '../utils/axiosInstance'

export const ADD_CATEGORIA = 'ADD_CATEGORIA'

/*
ACTION CREATORS
 */

export function saveCategoria(descripcion) {
  return { type: ADD_CATEGORIA, descripcion }
}

export function postCategoria(categoria) {
  return function(dispatch) {
    return axios.get('/users/').then((response) => {
      dispatch(saveCategoria("hola"))
      return response
    })
  }
}

