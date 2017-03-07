import { createStore, applyMiddleware } from 'redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { browserHistory } from 'react-router';

import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

// import the root reducer
import rootReducer from './reducers';

const loggerMiddleware = createLogger()

const categoria = {
    isFetching: false,
}

const defaultState = {
}

const store = createStore(
    rootReducer, 
    defaultState, 
    applyMiddleware( thunkMiddleware, loggerMiddleware)
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const history = syncHistoryWithStore(browserHistory, store)
export default store
