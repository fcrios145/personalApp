import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import categoriaReducer from '../categoria/CategoriaReducer'

const rootReducer = combineReducers({
    categoria: categoriaReducer,
    routing: routerReducer
})

export default rootReducer;
