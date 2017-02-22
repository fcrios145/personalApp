import Immutable from 'immutable'

const CategoriaRecord = Immutable.Record({
  id: null,
  nombre: ''
})

class CategoriaModel extends CategoriaRecord {
  getNombre() {
    return this.get('nombre')
  }
}

export default CategoriaModel