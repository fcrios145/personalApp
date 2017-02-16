import React, { Component } from 'react';
import './header.css';
import { Link } from 'react-router';

class Header extends Component {
  render() {
    return (
        <div>
            <header>
                <h1>Francisco Rios</h1>
                <ul className="topnav">
                  <li>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/logout">Logout</Link>
                  </li>
                </ul>
            </header>
        </div>
    )
  }
}

export default Header;
