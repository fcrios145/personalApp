import React, { Component } from 'react'
import './login.css'
import auth from '../utils/auth'
import Header from '../app/Header'
import $ from 'jquery'
import axios from 'axios'


class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loggedIn: auth.loggedIn(),
      errorLogin: false,
      token: ''
    }
  }

  updateAuth = (loggedIn) => {
    this.setState({
      loggedIn
    })
  }

  changeUsername = (e) => {
    this.setState({
      errorLogin: false
    })
  }

  componentWillMount() {
    /*auth.onChange = this.updateAuth;*/
    this.updateAuth()
    auth.login();
  }

  authAxios() {
    axios.request({
      url: "/o/token/",
      method: "post",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      baseURL: "http://localhost:8000/",
      data: {
        grant_type: "password",
        username: "kriz",
        password: "rioslopez"
      }
    }).then(function(res) {
      console.log(res);
    });
  }

  authAjax() {
    $.ajax({

      // The URL to process the request
      url : 'http://localhost:8000/o/token/',
      type : 'POST',
      data : {
        grant_type: "password",
        client_id : "a9m0Gqb2SiCArP8B9D1kacdUDKvVBo1kV8kQBrTZ",
        username: "pancho",
        password: "rioslopez"
      },

      dataType: "json",
      success: (r) => {
        console.log(r);
        this.setState({
          token: r.access_token
        })
      },
      /*success: function(response) {
        console.log(response);
        this.setState({
          token: response.access_token
        })
      }*/

    });
  }

  probarAuth = (e) => {
    e.preventDefault()
    this.authAjax()
  }

  handleLogin = (e) => {
    e.preventDefault();
    const username = this.username.value;
    const  password = this.password.value;

    auth.login(username, password, (loggedIn) => {
      if (!loggedIn){
        return this.setState({errorLogin : true})
      }
      const { location } = this.props;
      if(location.state && location.state.nextPathName) {
        this.props.router.replace(location.state.nextPathName)
      } else {
        this.props.router.replace('/')
      }
    })

  }

  users = (e) => {
    e.preventDefault()
    $.ajax({
      // The URL to process the request
      url : 'http://localhost:8000/users/',
      type : 'GET',
      headers: {
        "Authorization": 'Bearer ' + this.state.token
      },
      dataType: "json",
      success: function(response) {
        console.log(response);
      }

    });
  }

  render() {
    return (
      <div>
       <Header></Header>
        <div className="container-login">
          <div className="container">
            <div className="logo">Login</div>
            <div className="login-item">
              <form ref={(input) => this.loginForm = input} onSubmit={(e) => this.handleLogin(e)} className="form form-login">
                <div className="form-field">
                  <label className="user" htmlFor="login-username"><span className="hidden">Username</span></label>
                  <input onChange={(e) => this.changeUsername(e)} ref={(input) => this.username = input} id="login-username" type="text" className="form-input" placeholder="Username" required />
                </div>

                <div className="form-field">
                  <label className="lock" htmlFor="login-password"><span className="hidden">Password</span></label>
                  <input ref={(input) => this.password = input} id="login-password" type="password" className="form-input" placeholder="Password" required />
                </div>

                <div className="form-field">
                  <input type="submit" value="Log in" />
                </div>
                <button onClick={(e) => this.probarAuth(e)} type="button">Probar auth</button>
                <button type="button" onClick={(e) => this.users(e)}>Usuarios</button>
              </form>
              {this.state.errorLogin && (
                <p className="text--center">Usuario o contraseña incorrecta</p>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;
