import React, { PropTypes } from 'react'

class Categoria extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      descripcion: ""
    }
  }

  saveCategoria = (event) => {
    event.preventDefault()
    this.props.addCategoria(this.inputDescripcion.value).then((response) => {
      this.setState({
        descripcion: ""
      })
    })
  }

  onChangeDescripcion = (e) => {
    this.setState({
      descripcion: e.target.value
    })
  }

  render() {
    return(
      <div className="tron">
        <h2>Categoría</h2>
      <form className="forms" onSubmit={(e) => this.saveCategoria(e)}>
          <input onChange={(e) => this.onChangeDescripcion(e)} 
                  value={this.state.descripcion} ref={ node => {this.inputDescripcion = node} } 
                  type="text" 
                  id="nombre" 
                  name="nombre" 
                  placeholder="Categoria"/>
          <input type="submit" value="Guardar"/>
        </form>
      </div>
    )
  }
}

Categoria.propTypes = {
  addCategoria: PropTypes.func.isRequired
}

export default Categoria;
