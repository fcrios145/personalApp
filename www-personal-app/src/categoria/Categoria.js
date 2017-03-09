import React, { PropTypes } from 'react'

const Categoria = ({ addCategoria, fetchAll, categorias }) => {
  let inputDescripcion

  return(
    <div className="tron">
      <h2>Categoría</h2>
    <form className="forms" onSubmit={ e =>{
      e.preventDefault()
      addCategoria(inputDescripcion.value)
    } }>
        <input ref={ node => {inputDescripcion = node} } type="text" id="nombre" name="nombre" placeholder="Categoria"/>
        <input type="submit" value="Guardar"/>
        <button onClick={fetchAll} type="button">Get Categorias</button>
        <ul>
          {categorias.map(categoria => 
            <li key={categoria.id}>{categoria.nombre}</li>
          )}
        </ul>
      </form>
    </div>
  )

}

Categoria.propTypes = {
  addCategoria: PropTypes.func.isRequired,
  fetchAll: PropTypes.func.isRequired,
  categorias: PropTypes.arrayOf(PropTypes.shape({
    created_date: PropTypes.string.isRequired,
    modified_date: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    nombre: PropTypes.string.isRequired
  }).isRequired).isRequired
}

export default Categoria;
