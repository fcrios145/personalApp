import React, { Component } from 'react';
import './sidebar.css'
import { Link } from 'react-router';

export default class Sidebar extends Component {
  render() {
    return (
      <div id="mySidenav" className="sidenav">
        <ul>
          <li><Link to="/gasto">Gasto</Link></li>
          <li><Link to="/ingreso">Ingreso</Link></li>
          <li><Link to="/categoria">Categoría</Link></li>
          <li><Link to="/tipo_gasto">Tipo de gasto</Link></li>
          <li><Link to="/balance">Balance</Link></li>
        </ul>
      </div>
    )
  }
}
