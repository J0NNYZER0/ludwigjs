import fetch from 'isomorphic-fetch'
import { Constants as constants } from '../constants/index'

class Content {

  static getDocs(data) {

    return new Promise((resolve, reject) => {

      const encodedURI = encodeURI(`${constants.URI.CONTENT.DOCS}`)

      fetch(encodedURI, { credentials: 'include', method: 'GET' })
      .then(response => resolve(response.json()))
      .catch(err => reject(err))
    })
  }

  static getProducts(data) {

    return new Promise((resolve, reject) => {

      const encodedURI = encodeURI(`${constants.URI.CONTENT.PRODUCTS}`)

      fetch(encodedURI, { credentials: 'include', method: 'GET' })
      .then(response => resolve(response.json()))
      .catch(err => reject(err))
    })
  }
}

export { Content }
