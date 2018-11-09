// https://redux.js.org/docs/recipes/reducers/ImmutableUpdatePatterns.html
import { Constants as constants } from '../constants/index'
import initialState from './initialState'

const productsReducer = (state = initialState.products, action) => {

  switch (action.type) {

    case constants.ACTIONS.PRODUCTS.LOAD: {

      const products = [...action.data]

      return products
    }

    default:
      return state
  }
}

export default productsReducer
