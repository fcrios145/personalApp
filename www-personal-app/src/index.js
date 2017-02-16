import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { browserHistory } from 'react-router';

/*Estilos*/
import 'font-awesome/css/font-awesome.css'


import Routes from './routes';


ReactDOM.render(
  <Routes history={browserHistory} />,
  document.getElementById('root')
);
