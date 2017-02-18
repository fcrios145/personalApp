import React, { Component } from 'react'

class Categoria extends Component {

  handleSave = (e) => {
    e.preventDefault()
    alert(this.nombre.value);
  }

  render() {
    return(
      <div className="tron">
        <h2>Categoría</h2>
        <form className="forms" onSubmit={(e) => this.handleSave(e)}>
          <input ref={(i) => this.nombre = i} type="text" id="nombre" name="nombre" placeholder="Categoria"/>
          <input type="submit" value="Guardar"/>
        </form>
      </div>
    )
  }
}

export default Categoria;