import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import categoriaReducer from '../categoria/CategoriaReducer'

const rootReducer = combineReducers({
    categoriaReducer,
    routing: routerReducer
})

export default rootReducer;
