import React, { Component } from 'react';
import './header.css';

class Header extends Component {
  render() {
    return (
        <header>
          <h1>Francisco Personal App</h1>
          <div className="header-top-bar">
          <ul>
            <li><a href="#">Gasto</a></li>
            <li><a href="#">Tipos</a></li>
            <li><a href="#">Categorias</a></li>
            <li><a href="#">Dia cero</a></li>
          </ul>
          </div>
        </header>
    )
  }
}

export default Header;
