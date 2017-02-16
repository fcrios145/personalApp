import React, { Component } from 'react';
import auth from '../utils/auth';

class Logout extends  Component {

    componentDidMount() {
        auth.logout();
    }

    render() {
        return(
            <p>adios</p>
        )
    }
}

export default Logout;