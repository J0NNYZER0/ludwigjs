import { Api as api } from '../apis/contact'
import { Constants as constants } from '../constants/index'

const success = data => ({
  type: constants.ACTIONS.MESSAGES.SUCCESS, data
})

export const send = data => {

  return dispatch => {

    return api.send(data).then(response => {

      dispatch(success(response.data))

    }).catch(error => {

      throw(error)
    })
  }
}
