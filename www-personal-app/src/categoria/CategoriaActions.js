//CategoriaActions.js

export const SAVE = 'SAVE'

/*
ACTION CREATORS
 */

export function saveCategoria(descripcion) {
  return { type: SAVE, descripcion }
}
