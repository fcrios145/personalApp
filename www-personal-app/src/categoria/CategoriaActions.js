//CategoriaActions.js
import axios from '../utils/axiosInstance'

export const ADD_CATEGORIA = 'ADD_CATEGORIA'
export const REQUEST_ADD_CATEGORIA = 'REQUEST_ADD_CATEGORIA'
export const REQUEST_ALL_CATEGORIAS = 'REQUEST_ALL_CATEGORIAS'
export const ERROR_ALL_CATEGORIAS = 'ERROR_ALL_CATEGORIAS'
export const RECEIVE_ALL_CATEGORIAS = 'RECEIVE_ALL_CATEGORIAS'

/*
ACTION CREATORS
 */

export function saveCategoria(data) {
  return { type: ADD_CATEGORIA, data }
}

export function postCategoria(categoria) {
  return function(dispatch) {
    return axios.post('/categorias/', {
        nombre: categoria
      }
    ).then((response) => {
      dispatch(saveCategoria(response.data))
      return response
    })
  }
}

export function requestPostCategoria(categoria) {
  return {
    type: REQUEST_ADD_CATEGORIA,
    categoria
  }
}

function requestAllCategorias() {
  return {
    type: REQUEST_ALL_CATEGORIAS
  }
}

function erroAllCategorias(data) {
  return {
    type: ERROR_ALL_CATEGORIAS,
    data
  }
}

function receiveAllCategorias(data) {
  return {
    type: RECEIVE_ALL_CATEGORIAS,
    data
  }
}

export function fetchAllCategorias() {
  return function(dispatch) {
    dispatch(requestAllCategorias())
    return axios.get('/categorias/')
      .then((response) => {
        dispatch(receiveAllCategorias(response.data))
      })
      .catch((response) => {
        dispatch(erroAllCategorias(response.data))
      })
  }
}
