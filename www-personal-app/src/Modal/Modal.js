import React, {Component} from 'react'

import './modal.css'

class Modal extends Component {

  constructor(props) {
    super(props)
    this.state = {
      modalCategoriaVisibility: false
    }
  }

  close(e) {
    e.preventDefault()

    if (this.props.onClose) {
      this.props.onClose()
    }
  }

  render() {
    if (this.props.isOpen === false)
      return null
    return(
      <div ref={(i) => this.myModal = i} id="myModal" className='modal show'>
        <div className="modal-content">
          <span onClick={(e) => this.close(e)} className="close">&times;</span>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Modal