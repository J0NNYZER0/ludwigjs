import { Api as api } from '../apis/account'
import { Constants as constants } from '../constants/index'

const success = (data) => ({
  type: constants.ACTIONS.LOGIN.SUCCESS, data
})

export const login = data => {

  return dispatch => {

    return api.login(data).then(response => {

      dispatch(success(response.data))

    }).catch(error => {

      throw(error)
    })
  }
}

export const loggingIn = data => {

  return dispatch => {

    return api.loggingIn(data).then(response => {

      dispatch(success(response.data))

    }).catch(error => {

      throw(error)
    })
  }
}

export const logout = () => {

  return dispatch => {

    return api.logout().then(response => {

      dispatch(success(response.data))

    }).catch(error => {

      throw(error)
    })
  }
}

export const register = data => {

  return dispatch => {

    return api.register(data).then(response => {

      dispatch(success(response.data))

    }).catch(error => {

      throw(error)
    })
  }
}

export const confirm = data => {

  return dispatch => {

    return api.confirm(data).then(response => {

      dispatch(success(response.data))

    }).catch(error => {

      throw(error)
    })
  }
}

export const reconfirm = data => {

  return dispatch => {

    return api.reconfirm(data).then(response => {

      dispatch(success(response.data))

    }).catch(error => {

      throw(error)
    })
  }
}
