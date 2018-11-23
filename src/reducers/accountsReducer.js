// https://redux.js.org/docs/recipes/reducers/ImmutableUpdatePatterns.html
import { Constants as constants } from '../constants/index'
import initialState from './initialState'

const accountsReducer = (state = initialState.accounts, action) => {

  switch (action.type) {

    case constants.ACTIONS.ACCOUNTS.LOAD: {

      const accounts = [...action.data]

      return accounts
    }

    default:
      return state
  }
}

export default accountsReducer
