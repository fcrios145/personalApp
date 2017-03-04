//CategoriaActions.js

export const ADD_CATEGORIA = 'ADD_CATEGORIA'

/*
ACTION CREATORS
 */

export function saveCategoria(descripcion) {
  return { type: ADD_CATEGORIA, descripcion }
}
