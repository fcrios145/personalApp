import React, {Component} from 'react'

import './modal.css'

class Modal extends Component {

  constructor(props) {
    super(props)
    this.state = {
      modalCategoriaVisibility: false
    }
  }

  componentDidMount() {
    this.setState({
      modalCategoriaVisibility: this.props.open
    })
  }

  close(e) {
    this.setState({
      modalCategoriaVisibility: false
    })
  }

  render() {
    return(
      <div ref={(i) => this.myModal = i} id="myModal" className={"modal " + (this.state.modalCategoriaVisibility ? 'show' : 'hide')}>
        <div className="modal-content">
          <span onClick={(e) => this.close(e)} className="close">&times;</span>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Modal