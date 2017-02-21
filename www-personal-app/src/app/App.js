import React, { Component } from 'react';

import Header from './Header';
import Sidebar from './Sidebar';
import './app.css'

class App extends Component {
  render() {
    return(
      <div>
       <Header></Header>
        <Sidebar></Sidebar>
        <div className="content">
          {this.props.children}
          {/*{ React.cloneElement(this.props.children, null)}*/}
        </div>
      </div>
    )
  }
}

export default App;
