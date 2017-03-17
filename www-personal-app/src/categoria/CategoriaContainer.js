import { connect } from 'react-redux'
import { postCategoria, fetchAllCategorias } from './CategoriaActions'
import Categoria from './Categoria'

const mapStateToProps = (state, ownProps) => {
  return {
    categorias: state.categoria.items
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addCategoria: (categoria, e) => {
      return dispatch(postCategoria(categoria))
    },
    fetchAll: () => {
      dispatch(fetchAllCategorias())
    }
  }
}

const CategoriaContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Categoria)

export default CategoriaContainer

