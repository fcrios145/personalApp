import React, { Component } from 'react';
import auth from '../utils/auth';
import { browserHistory } from 'react-router';

class Logout extends  Component {

    componentDidMount() {
        auth.logout();
        browserHistory.push('/about');
    }

    render() {
        return(
            <p>adios</p>
        )
    }
}

export default Logout;
