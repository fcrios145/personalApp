import { ADD_CATEGORIA } from './CategoriaActions'

const initialState = {
  descripcion: 'hola' 
}

function categoriaReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CATEGORIA:
      return Object.assign({}, state, {
        descripcion: action.descripcion
      })
    default:
      return state
  }
}

export default categoriaReducer
