import { Api as api } from '../apis/products'
import { Constants as constants } from '../constants/index'

const success = (data) => ({
  type: constants.ACTIONS.PRODUCTS.LOAD, data
})

export const get = data => {

  return dispatch => {

    return api.get(data).then(response => {

      dispatch(success(response.data))

    }).catch(error => {

      throw(error)

    })
  }
}
