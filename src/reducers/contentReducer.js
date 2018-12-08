// https://redux.js.org/docs/recipes/reducers/ImmutableUpdatePatterns.html
import { Constants as constants } from '../constants/index'
import initialState from './initialState'

const contentReducer = (state = initialState.content, action) => {

  switch (action.type) {

    case constants.ACTIONS.CONTENT.DOCS.LOAD: {

      const docs = [...action.data]

      return { ...initialState.content, docs: docs }

    }

    case constants.ACTIONS.CONTENT.PRODUCTS.LOAD: {

      const products = [...action.data]

      return { ...initialState.content, products: products }

    }

    default:
      return state
  }
}

export default contentReducer
