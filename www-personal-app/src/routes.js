// src/routes.js
import React from 'react'
import { Router, Route } from 'react-router'

import App from './app/App'
import About from './app/About'
import Login from './login/Login'
import Logout from './login/Logout'
import Gasto from './gasto/Gasto'
import CategoriaContainer from './categoria/CategoriaContainer'
import CategoriaListContainer from './categoria/CategoriaListContainer'
import TipoGasto from './tipoGasto/TipoGasto'
import Balance from './balance/Balance'
import Ingreso from './ingreso/Ingreso'

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
    <Route path="/login" component={Login} />
    <Route path="/" onEnter={requireAuth} component={App}>
      <Route path="/about" component={About} onEnter={requireAuth} />
      <Route path="logout" component={Logout} onEnter={requireAuth}/>
      <Route path="/gasto" component={Gasto} onEnter={requireAuth}/>
      <Route path="/categoria" component={CategoriaListContainer} onEnter={requireAuth}>
        <Route path="add" component={CategoriaContainer} onEnter={requireAuth}/>
      </Route>
      <Route path="/tipo_gasto" component={TipoGasto} onEnter={requireAuth}/>
      <Route path="/balance" component={Balance} onEnter={requireAuth}/>
      <Route path="/ingreso" component={Ingreso} onEnter={requireAuth}/>
      <Route path="/addCategoria" component={CategoriaContainer} onEnter={requireAuth}/>
    </Route>
  </Router>
);

export default Routes;
