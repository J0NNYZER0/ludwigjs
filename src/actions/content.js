import { Content as api } from '../apis/content'
import { Constants as constants } from '../constants/index'

const loadDocs = (data) => ({
  type: constants.ACTIONS.CONTENT.DOCS.LOAD, data
})

const loadProducts = (data) => ({
  type: constants.ACTIONS.CONTENT.PRODUCTS.LOAD, data
})

export const getDocs = data => {

  return dispatch => {

    return api.getDocs(data).then(response => {

      dispatch(loadDocs(response.data))

    }).catch(error => {

      throw(error)

    })
  }
}

export const getProducts = data => {

  return dispatch => {

    return api.getProducts(data).then(response => {

      dispatch(loadProducts(response.data))

    }).catch(error => {

      throw(error)

    })
  }
}
