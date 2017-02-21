import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';

/*Estilos*/
import 'font-awesome/css/font-awesome.css'
import './index.css';


import Routes from './routes';


ReactDOM.render(
  <Routes history={browserHistory} />,
  document.getElementById('root')

);
