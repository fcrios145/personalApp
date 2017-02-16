// src/routes.js
import React from 'react';
import { Router, Route } from 'react-router';

import App from './app/App';
import About from './app/About';
import Login from './login/Login';
//import About from './components/About';
//import NotFound from './components/NotFound';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App}>
      <Route path="/about" component={About} />
      <Route path="/login" component={Login} />
    </Route>
  </Router>
);

export default Routes;
