import React, { Component } from 'react';

class Gasto extends Component {

  handleSave = (e) => {
    e.preventDefault();
  }

  render() {
    return (
      <div className="tron">
        <h2>Gasto</h2>
        <form onSubmit={(e) => this.handleSave(e)}>

          <label htmlFor="importe">Importe</label>
          <input type="numeric" id="importe" name="importe" placeholder="Importe"/>

          <button>Save</button>
        </form>
      </div>
    )
  }
}

export default Gasto;