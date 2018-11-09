'use strict'

const Bounce = require('bounce'),
  HapiReactCookie = require('../plugins/hapi-react-cookie')

const PreHandlers = {
  GetAccount: async(request, h) => {

    try {
      
      let account = {}

      if (request.state.hasOwnProperty('sid'))
        account = await request.server.app.cache.get(request.state['sid'].sid) || {}

      return account
    } catch(e) {

      Bounce.rethrow(e, 'system')

    }
  },
  GetCookies: async(request, h) => {

    try {

      HapiReactCookie(request, h)
      return 'set cookie'
    } catch(e) {

      Bounce.rethrow(e, 'system')
    }
  }
}

module.exports = PreHandlers
