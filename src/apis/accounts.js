import fetch from 'isomorphic-fetch'
import { Constants as constants } from '../constants/index'

class Api {

  static get(data) {

    return new Promise((resolve, reject) => {

      const encodedURI = encodeURI(`${constants.URI.API.ACCOUNTS}`)

      fetch(encodedURI, { credentials: 'include', method: 'GET' })
      .then(response => resolve(response.json()))
      .catch(err => reject(err))
    })
  }

}

export { Api }
