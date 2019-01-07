// https://redux.js.org/docs/recipes/reducers/ImmutableUpdatePatterns.html
import { Constants as constants } from '../constants/index'
import initialState from './initialState'

const contentReducer = (state = initialState.content, action) => {

  switch (action.type) {

    case constants.ACTIONS.CONTENT.DOCS.LOAD: {

      const newContent = {...state, docs: action.data}

      return newContent

    }

    case constants.ACTIONS.CONTENT.PRODUCTS.LOAD: {

      const newContent = {...state, products: action.data}

      return newContent

    }

    default:
      return state
  }
}

export default contentReducer
