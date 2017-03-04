import { ADD_CATEGORIA } from './CategoriaActions'

const initialState = {
  descripcion: '' 
}

function categoria(state = initialState, action) {
  switch (action.type) {
    case ADD_CATEGORIA:
      return Object.assign({}, state, {
        decripcion: action.decripcion
      })
    default:
      return state
  }
}

export default modalApp
