import { 
  ADD_CATEGORIA, 
  REQUEST_ALL_CATEGORIAS,
  RECEIVE_ALL_CATEGORIAS,
  ERROR_ALL_CATEGORIAS
} from './CategoriaActions'

const initialState = {
  descripcion: '' ,
  isLoading: false,
  items: [],
  error: false
}

function categoriaReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CATEGORIA:
      return Object.assign({}, state, {
        items: [...state.items, action.data]
      })
    case REQUEST_ALL_CATEGORIAS:
      return Object.assign({}, state, {
        isLoading: true,
        error: false
      })
    case RECEIVE_ALL_CATEGORIAS:
      return Object.assign({}, state, {
        isLoading: false,
        error: false,
        items: action.data.results
      })
    case ERROR_ALL_CATEGORIAS:
      return Object.assign({}, state, {
        isLoading: false,
        error: true,
        items: action.data
      })
    default:
      return state
  }
}

export default categoriaReducer
