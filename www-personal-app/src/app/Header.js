import React, { Component } from 'react';
import './header.css';
import { Link } from 'react-router';

import auth from '../utils/auth';

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loggedIn: auth.loggedIn()
    }
  }

  render() {
    return (
        <div>
            <header>
                <h1>Francisco Rios</h1>
                <ul className="topnav">
                  <li>
                    <Link to='/login'>Login</Link>
                  </li>
                    {this.state.loggedIn && (
                      <li>
                        <Link to='/logout'>Logout</Link>
                      </li>
                    )}
                  <li>
                    <Link to='/'>Home</Link>
                  </li>
                  <li>
                    <Link to='about'>About</Link>
                  </li>
                </ul>
            </header>
        </div>
    )
  }
}

export default Header;
