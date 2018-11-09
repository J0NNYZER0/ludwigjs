import { Api as api } from '../apis/contact'
import { Constants as constants } from '../constants/index'

const toggle = data => ({
  type: constants.UI.MODAL, data
})

export const modal = show => {

  return dispatch => {

    return new Promise((resolve, reject) => {

      dispatch(toggle(show))
    })
  }
}
