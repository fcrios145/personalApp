import { connect } from 'react-redux'
import { saveCategoria, postCategoria } from './CategoriaActions'
import Categoria from './Categoria'

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addCategoria: (categoria) => {
      dispatch(postCategoria(categoria)).then((r) => console.log(r))
    }
  }
}

const CategoriaContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Categoria)

export default CategoriaContainer
