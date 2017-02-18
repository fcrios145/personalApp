import React, {Component} from 'react'

import './modal.css'

class Modal extends Component {

  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
  }

  close(e) {

  }

  render() {
    console.log(this.props.children.props.open);
    return(
      <div ref={(i) => this.myModal = i} id="myModal" className={"modal " + (this.props.open ? 'show' : 'hide')}>
        <div className="modal-content">
          <span onClick={(e) => this.close(e)} className="close">&times;</span>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Modal