// src/routes.js
import React from 'react';
import { Router, Route } from 'react-router';

import App from './app/App';
import About from './app/About';
import Login from './login/Login';
import Logout from './login/Logout';

import auth from './utils/auth';


function requireAuth(nextState, replace) {
    if (!auth.loggedIn()) {
        replace({
            pathname: '/login',
            state: { nextPathname: nextState.location.pathname }
        })
    }
}

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App}>
      <Route path="/about" component={About} onEnter={requireAuth} />
      <Route path="/login" component={Login} />
      <Route path="logout" component={Logout} />
    </Route>
  </Router>
);

export default Routes;
