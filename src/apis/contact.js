import fetch from 'isomorphic-fetch'
import { Constants as constants } from '../constants/index'

class Api {


  static send(data) {

    return new Promise((resolve, reject) => {

      const encodedURI = encodeURI(`${constants.URI.API.CONTACT}`)

      fetch(encodedURI, {
        credentials: 'include',
        headers: {
          'Accept': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(data)
      })
      .then(response => resolve(response.json()))
      .catch(err => reject(err))
    })
  }

}

export { Api }
