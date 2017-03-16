// CategoriaList.js

import React, { Component } from 'react'
import { Link } from 'react-router'

class CategoriaList extends Component {

  componentDidMount() {
    this.props.fetchAll()
  }

  render() {
    const categorias = this.props.categorias
    return (
      <div>
        <ul>
          {categorias.map(categoria =>
            <li key={categoria.id}>{categoria.nombre}</li>
          )}
        </ul>
        <Link to='/addCategoria'>
          Agregar categoria
        </Link>
      </div>
    )
  }
}

CategoriaList.propTypes = {
  fetchAll: React.PropTypes.func.isRequired,
  categorias: React.PropTypes.arrayOf(React.PropTypes.shape({
    id: React.PropTypes.number.isRequired,
    nombre: React.PropTypes.string.isRequired
  }).isRequired).isRequired
}



export default CategoriaList
