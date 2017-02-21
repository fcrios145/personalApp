import React, { Component } from 'react'
import './gasto.css'
import moment from 'moment'

import Modal from '../Helpers/Modal'
import Categoria from '../categoria/Categoria'

class Gasto extends Component {

  constructor(props) {
    super(props);
    const today = moment().format('YYYY-MM-DD');
    this.state = {
      fecha: today,
      importe: 0.00
    }
  }

  handleSave = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="tron">
        <h2>Gasto</h2>
        <form className="forms" onSubmit={(e) => this.handleSave(e)}>

          <input type="number" id="importe" name="importe" placeholder="Importe"/>

          <input readOnly value={this.state.fecha} type="date" id="fecha" name="fecha" placeholder="Fecha"/>

          <textarea placeholder="Nota" id="nota" name="nota" cols="30" rows="5"></textarea>

          <textarea placeholder="Observación" id="observacion" name="observacion" cols="30" rows="5"></textarea>

          <input type="text" id="categoria" name="categoria" placeholder="Categoria" className="input-with-plus"/>

          <input type="text" id="tipo" name="tipo" placeholder="Tipo"/>

          <input type="submit" value="Guardar"/>
        </form>

      </div>
    )
  }
}

export default Gasto;
