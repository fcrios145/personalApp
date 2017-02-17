import React, { Component } from 'react';
import './gasto.css';
import moment from 'moment';

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
  }

  render() {
    return (
      <div className="tron">
        <h2>Gasto</h2>
        <form className="form-gasto" onSubmit={(e) => this.handleSave(e)}>

          <label htmlFor="importe">Importe</label>
          <input type="number" id="importe" name="importe" placeholder="Importe"/>

          <label htmlFor="fecha">Fecha</label>
          <input readOnly value={this.state.fecha} type="date" id="fecha" name="fecha" placeholder="Fecha"/>

          <label htmlFor="nota">Nota</label>
          <textarea id="nota" name="nota" cols="30" rows="5"></textarea>

          <label htmlFor="observacion">Observación</label>
          <textarea id="observacion" name="observacion" cols="30" rows="5"></textarea>

          <label htmlFor="categoria">Categoria</label>
          <input type="text" id="categoria" name="categoria" placeholder="Categoria"/>

          <label htmlFor="tipo">Tipo</label>
          <input type="text" id="tipo" name="tipo" placeholder="Tipo"/>

          <input type="submit" value="Save"/>
        </form>
      </div>
    )
  }
}

export default Gasto;
