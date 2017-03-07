import React, { PropTypes } from 'react'

const Categoria = ({ addCategoria }) => {
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
      </form>
    </div>
  )

}

Categoria.propTypes = {
  addCategoria: PropTypes.func.isRequired
}

export default Categoria;

