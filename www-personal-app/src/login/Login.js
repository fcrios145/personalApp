import React, { Component } from 'react';

class Login extends Component {

  login = (e) => {
    console.log("hola mundo");
  }

  render() {
    return (
      <div>
        <form>
          <input type="text" placeholder="User" />
          <input type="password" placeholder="Password" />
          <button onClick={ this.login } type="button">Login</button>
        </form>
      </div>
    )
  }
}

export default Login;
