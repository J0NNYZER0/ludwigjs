// https://redux.js.org/docs/recipes/reducers/ImmutableUpdatePatterns.html
import { Constants as constants } from '../constants/index'
import initialState from './initialState'

const widgetsReducer = (state = initialState.widgets, action) => {

  switch (action.type) {

    case constants.ACTIONS.WIDGETS.LOAD: {

      const widgets = [...action.data]

      return widgets
    }

    default:
      return state
  }
}

export default widgetsReducer
