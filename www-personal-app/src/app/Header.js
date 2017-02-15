import React, { Component } from 'react';
import './header.css';

class Header extends Component {
  render() {
    return (
        <div>
            <header>
                <h1>Francisco Rios</h1>
                <ul className="topnav">
                    <li><a href="#">Login</a></li>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">News</a></li>
                    <li><a href="#">About</a></li>
                </ul>
            </header>
        </div>
    )
  }
}

export default Header;
