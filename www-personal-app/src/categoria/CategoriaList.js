// CategoriaList.js

import React, { Component } from 'react'
import { Link } from 'react-router'
import './categoriaList.css'

class CategoriaList extends Component {

  componentDidMount() {
    this.props.fetchAll()
  }

  render() {
    const categorias = this.props.categorias
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Descripción</th>
            </tr>
          </thead>
          <tbody>
            {categorias.map(categoria =>
              <tr key={categoria.id}>
                <td>{categoria.nombre}</td>
              </tr>
            )}
          </tbody>
        </table>
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
