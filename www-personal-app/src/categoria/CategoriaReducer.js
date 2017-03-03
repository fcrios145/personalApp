import { SAVE } from './CategoriaActions'

const initialState = {
  descripcion: '' 
}

function categoria(state = initialState, action) {
  switch (action.type) {
    case SAVE:
      return Object.assign({}, state, {
        decripcion: action.decripcion
      })
    default:
      return state
  }
}

export default modalApp
