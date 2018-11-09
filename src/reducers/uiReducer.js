// https://redux.js.org/docs/recipes/reducers/ImmutableUpdatePatterns.html
import { Constants as constants } from '../constants/index'
import initialState from './initialState'

const uiReducer = (state = initialState.ui, action) => {

  switch (action.type) {

    case constants.UI.MODAL: {

      return { ...state, modal: action.data }

    }

    default:
      return state

  }
}

export default uiReducer
