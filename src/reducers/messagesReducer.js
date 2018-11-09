// https://redux.js.org/docs/recipes/reducers/ImmutableUpdatePatterns.html
import { Constants as constants } from '../constants/index'
import initialState from './initialState'

const messagesReducer = (state = initialState.messages, action) => {

  let newState = { ...state }

  switch (action.type) {

    case constants.ACTIONS.MESSAGES.SUCCESS: {

      return [{...action.data}]

    }

    default:
      return state
  }
}

export default messagesReducer
