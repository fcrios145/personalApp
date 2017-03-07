import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';

/*Estilos*/
import 'font-awesome/css/font-awesome.css'
import './index.css';
import store, { history } from './app/store'

/*REDUX*/
//import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
//import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
//import thunkMiddleware from 'redux-thunk'

//import rootReducer from './app/reducers'
import Routes from './routes';

// Add the reducer to your store on the `routing` key
//const store = createStore(
  //combineReducers({
    //...rootReducer,
    //routing: routerReducer
  //})
//)
//const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Routes history={history} />
  </Provider>,
  document.getElementById('root')
);
