import { SET_VISIBILITY } from './ModalActions'

const initialState = {
  visibility: false
}

function modalApp(state = initialState, action) {
  switch (action.type) {
    case SET_VISIBILITY:
      return Object.assign({}, state, {
        visibility: action.visibility
      })
    default:
      return state
  }
}

export default modalApp
