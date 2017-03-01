import $ from 'jquery'
import axios, { baseURL, client_id } from './axiosInstance'

module.exports = {
    login(email, pass, cb) {
        cb = arguments[arguments.length - 1]
        if (localStorage.token) {
            if (cb) cb(true)
            this.onChange(true)
            return
        }
        pretendRequest(email, pass, (res) => {
            if (res.authenticated) {
                localStorage.token = res.token
                if (cb) cb(true)
                this.onChange(true)
            } else {
                if (cb) cb(false)
                this.onChange(false)
            }
        })
    },

    getToken() {
        return localStorage.token
    },

    logout(cb) {
        delete localStorage.token
        if (cb) cb()
        this.onChange(false)
    },

    loggedIn() {
        return !!localStorage.token
    },

    onChange() {}
}

function pretendRequest(username, password, cb) {
    //setTimeout(() => {
        //if (email === 'kriz145' && pass === 'jirameki22') {
            //cb({
                //authenticated: true,
                //token: Math.random().toString(36).substring(7)
            //})
        //} else {
            //cb({ authenticated: false })
        //}
    //}, 0)

    const grant_type = 'password'
    $.ajax({
      url : baseURL + 'o/token/',
      type : 'POST',
      dataType: "json",
      data : {
        grant_type,
        client_id,
        username,
        password
      },
      success: (response) => {
        cb({
          authenticated: true,
          token: response.access_token
        })
        //localStorage.token = response.access_token
      },
      error: (response) => {
        cb({
          authenticated: false
        })
      }
    });
}
