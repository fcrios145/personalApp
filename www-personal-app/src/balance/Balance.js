import React, { Component } from 'react'

class Balance extends Component {
  render() {
    return (
      <div className="tron">
        <h2>Balance</h2>
        <form className="forms">
          <input type="date" placeholder="Fecha de captura"/>
          <input type="number" id="importe-tarjeta" name="importe-tarjeta" placeholder="Importe en tarjeta"/>
          <input type="number" id="importe_efectivo" name="importe_efectivo" placeholder="Importe en efectivo"/>
          <input type="submit" value="Guardar"/>
        </form>
      </div>
    )
  }
}

export default Balance