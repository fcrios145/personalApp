import React, { Component } from 'react'

class TipoGasto extends Component {

  handleSave = (e) => {
    e.preventDefault();
  }

  render() {
    return(
      <div className="tron">
        <h2>Tipo de gasto</h2>
        <form className="forms" onSubmit={(e) => this.handleSave(e)}>
          <input type="text" id="nombre" name="nombre" placeholder="Tipo de gasto"/>
          <input type="submit" value="Guardar"/>
        </form>
      </div>
    )
  }
}

export default TipoGasto;