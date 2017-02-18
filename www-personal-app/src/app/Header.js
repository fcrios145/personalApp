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
                {this.state.loggedIn && (
                  <ul className="topnav">
                    <li>
                      <Link to='/logout'>
                        <i className="fa fa-sign-out" aria-hidden="true"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to='about'>About</Link>
                    </li>
                    <li>
                      <Link to='/'>Dashboard</Link>
                    </li>
                  </ul>
                )}
            </header>
        </div>
    )
  }
}

export default Header;
