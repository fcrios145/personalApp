import React from 'react';
import ReactDOM from 'react-dom';

/*Estilos*/
import 'font-awesome/css/font-awesome.css'
import './index.css';

/*REDUX*/
import store, { history } from './app/store'
import { Provider } from 'react-redux'
import Routes from './routes';


ReactDOM.render(
  <Provider store={store}>
    <Routes history={history} />
  </Provider>,
  document.getElementById('root')
);
