import { Api as api } from '../apis/accounts'
import { Constants as constants } from '../constants/index'

const success = (data) => ({
  type: constants.ACTIONS.ACCOUNTS.LOAD, data
})

export const get = () => {

  return dispatch => {

    return api.get().then(response => {

      dispatch(success(response.data.accounts))

    }).catch(error => {

      throw(error)

    })
  }
}
