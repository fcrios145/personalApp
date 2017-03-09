// CategoriaListContainer.js

import { connect } from 'react-redux'
import CategoriaList from './CategoriaList'
import { fetchAllCategorias } from './CategoriaActions'

const mapStateToProps = (state, ownProps) => {
  return {
    categorias: state.categoria.items
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchAll: () => {
      dispatch(fetchAllCategorias())
    }
  }
}

const CategoriaListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoriaList)

export default CategoriaListContainer