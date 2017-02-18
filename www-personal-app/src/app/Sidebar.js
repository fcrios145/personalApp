import React, { Component } from 'react';
import './sidebar.css'
import { Link } from 'react-router';

class Sidebar extends Component {
  render() {
    return (
      <div id="mySidenav" className="sidenav">
        <ul>
          <li><Link to="/gasto">Gasto</Link></li>
          <li><Link to="/categoria">Categoría</Link></li>
          <li><Link to="/tipo_gasto">Tipo de gasto</Link></li>
        </ul>
      </div>
    )
  }
}

export default Sidebar;