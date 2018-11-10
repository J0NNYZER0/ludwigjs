'use strict'

const Constants = require('../constants'),
  HOST = Constants.HOST,
  ACCOUNT_STATUS = Constants.ACCOUNT_STATUS,
  STATUS_MESSAGES = Constants.ACCOUNT_STATUS_MESSAGES

const Bounce = require('bounce'),
  ShortId = require('shortid'),
  accountStatus = require('../plugins/account-mgr'),
  QueryHandler = require('../apis/mysql/handlers').QueryHandler,
  Email = require('../email').Email,
  Data = {
    Products: require('../../assets/products.json'),
    Widgets: require('../../assets/widgets.json')
  },
  ssr = require('../../compiled/server'),
  template = require('../../compiled/template')

let initialState = {
  account: {},
  messages: [],
  products: Data.Products.data,
  ui: { modal: false },
  widgets: Data.Widgets.data
}

const Handlers = {
  Api: {
    Accounts: async (request, h) => {

      let accounts

      console.log('EXECUTE ACCOUNTS HANDLER')

      try {

        console.log('EXECUTE ACCOUNTS SUBMISSION')

        accounts = await QueryHandler('../apis/mysql/queries/select/accounts.sql')

      } catch(e) {

        console.log('ERROR:', e)

        Bounce.rethrow(e, 'system')

      }

      return h.response({ status: 200, data: { accounts } })

    },
    Contact: async (request, h) => {

      console.log('EXECUTE CONTACT HANDLER')

      let message = ''

      const payload = request.payload

      try {

        console.log('EXECUTE CONTACT SUBMISSION')

        await QueryHandler('../apis/mysql/queries/insert/contact.sql', payload)

        message = 'Your message has been sent'

      } catch(e) {

        console.log('ERROR:', e)

        Bounce.rethrow(e, 'system')

      }

      return h.response({ status: 200, data: { messageType: 0, message: message } })

    },
    Disable: async (request, h) => {

      try {

        const accountId = request.params.id,
          account = await QueryHandler('../apis/mysql/queries/select/account_by_id.sql', [accountId]),
          _accountStatus = await accountStatus(account.email)

          if (_accountStatus.status === ACCOUNT_STATUS.NON_EXISTENT) {

            return h.response({ status: 200, data: { status: ACCOUNT_STATUS.NON_EXISTENT }, message: STATUS_MESSAGES.NON_EXISTENT })

          } else {

            await QueryHandler('../apis/mysql/queries/update/account_disable.sql', [account.email])

            return h.response({ status: 200, data: { status: ACCOUNT_STATUS.DISABLED, accountId: accountId }, message: `${STATUS_MESSAGES.DISABLED} for ${accountId}` })

          }

      } catch(e) {

        Bounce.rethrow(e, 'system')

      }

    },
    Login: async (request, h) => {

      console.log('EXECUTE LOGIN HANDLER')

      try {

        const sessionId = request.state.hasOwnProperty('sid'),
          token = request.params.sid

        if (!sessionId) {

          console.log('Session Id Does Not Exist')

          return h.response({ status: 200, data: { status: ACCOUNT_STATUS.LOGGED_OUT, message: STATUS_MESSAGES.LOGGED_OUT } })

        }

        else {

          const cache = await request.server.app.cache.get(token)

          if (!cache) {

            console.log('Session Id Exists', 'Cache Does Not Exist')

            request.cookieAuth.clear()

            return h.response({ status: 200, data: { status: ACCOUNT_STATUS.SESSION_TIMEOUT, message: STATUS_MESSAGES.SESSION_TIMEOUT } })

          }

          else {

            console.log('Session Id Exists', 'Cache Exists')

            let _accountStatus = await accountStatus(cache.email, cache)

            console.log('ACCOUNT STATUS:', _accountStatus)

            if (_accountStatus.status !== ACCOUNT_STATUS.LOGGED_IN &&
              _accountStatus.status !== ACCOUNT_STATUS.LOGGING_IN &&
              _accountStatus.status !== ACCOUNT_STATUS.UNCONFIRMED &&
              _accountStatus.status !== ACCOUNT_STATUS.SESSION_TIMEOUT) {

              console.log('DO NOT EXECUTE ACCOUNT LOGIN')

              return h.response({ status: 200, data: { status: _accountStatus.status, message: _accountStatus.message } })

            } else {

              console.log('EXECUTE ACCOUNT LOGIN')

              const sid = ShortId.generate()

              _accountStatus.account.is_confirmed = 1
              _accountStatus.account.is_in_session = 1
              _accountStatus.status = ACCOUNT_STATUS.LOGGED_IN
              _accountStatus.message = STATUS_MESSAGES.LOGGED_IN
              _accountStatus.account.status = ACCOUNT_STATUS.LOGGED_IN
              _accountStatus.account.message = STATUS_MESSAGES.LOGGED_IN

              await request.server.app.cache.set(sid, _accountStatus.account, 0)

              request.server.app.cache.rules({ expiresIn: 1 * 60 * 60 * 1000 })

              request.cookieAuth.set({ sid })

              console.log('TOKEN SHORTCUT', `${sid}`)

              await request.server.app.cache.drop(token)

              request.cookieAuth.clear(token)

              await QueryHandler('../apis/mysql/queries/update/account_login.sql', [1,1,_accountStatus.account.email])

              return h.response({ status: 200, data: {..._accountStatus.account} })

            }

          }

        }

      } catch(e) {

        console.log('ERROR:', e)

        Bounce.rethrow(e, 'system')

      }

    },
    LoggingIn: async (request, h) => {

      console.log('EXECUTE LOGGING IN HANDLER')

      try {

        const payload = request.payload

        let _accountStatus = await accountStatus(payload.email)

        console.log('ACCOUNT STATUS:', _accountStatus)

        if (_accountStatus.status !== ACCOUNT_STATUS.LOGGED_OUT &&
            _accountStatus.status !== ACCOUNT_STATUS.LOGGING_IN &&
            _accountStatus.status !== ACCOUNT_STATUS.SESSION_TIMEOUT) {

          console.log('DO NOT EXECUTE ACCOUNT LOGGING IN')

          return h.response({ status: 200, data: { status: _accountStatus.status, message: _accountStatus.message } })

        }

        else {

          console.log('EXECUTE ACCOUNT LOGGING IN')

          const sid = ShortId.generate()

          await Email('Login at Ludwig UI', `${HOST}login/`, payload.email, sid, 'Login')

          console.log('token /' + sid)

          _accountStatus.status = ACCOUNT_STATUS.LOGGING_IN
          _accountStatus.message = STATUS_MESSAGES.LOGGING_IN
          _accountStatus.account.status = ACCOUNT_STATUS.LOGGING_IN
          _accountStatus.account.message = STATUS_MESSAGES.LOGGIN_IN

          await request.server.app.cache.set(sid, _accountStatus.account, 0)

          request.server.app.cache.rules({ expiresIn: 10 * 60 * 1000 })

          request.cookieAuth.set({ sid })

          console.log('TOKEN SHORTCUT', `${sid}`)

          return h.response({ status: 200, data: { status: _accountStatus.status, message: _accountStatus.message } })
        }

      } catch(e) {

        console.log('ERROR:', e)

        Bounce.rethrow(e, 'system')

      }

    },
    Logout: async (request, h) => {

      try {

        const session = request.state.hasOwnProperty('sid')

        if (session) {

          const cachedAccount = await request.server.app.cache.get(request.state['sid'].sid)

          if (!cachedAccount) {

            return h.response({ status: 200, data: { status: ACCOUNT_STATUS.SESSION_TIMEOUT }, message: STATUS_MESSAGES.SESSION_TIMEOUT })

          } else {

            await QueryHandler('../apis/mysql/queries/update/account_logout.sql', [cachedAccount.email])

            request.server.app.cache.drop(request.state['sid'].sid)

            request.cookieAuth.clear()

            return h.response({ status: 200, data: { status: ACCOUNT_STATUS.LOGGED_OUT }, message: STATUS_MESSAGES.LOGGED_OUT })

          }
        }

      } catch(e) {

        Bounce.rethrow(e, 'system')

      }

    },
    Register: async (request, h) => {

      console.log('EXECUTE REGISTER HANDLER')

      let message = ''

      try {

        let payload = request.payload,
          _accountStatus = await accountStatus(payload.email)

        console.log('ACCOUNT STATUS:', _accountStatus)

        if (_accountStatus.status !== ACCOUNT_STATUS.NON_EXISTENT) {

          console.log('DO NOT EXECUTE ACCOUNT REGISTER')

          return h.response({ status: 200, data: { status: _accountStatus.status, message: _accountStatus.message } })

        }

        else {

          console.log('EXECUTE ACCOUNT REGISTER')

          const sid = ShortId.generate()

          await Email('Login at Ludwig UI',`${HOST}login/`, payload.email, sid, 'Login')

          let newAccount = { ...payload, is_confirmed: 0, is_in_session: 0 }

          await QueryHandler('../apis/mysql/queries/insert/account.sql', newAccount)

          newAccount.status = ACCOUNT_STATUS.UNCONFIRMED

          newAccount.message = 'Please check your email for your one-click login.'

          await request.server.app.cache.set(sid, newAccount, 0)

          request.server.app.cache.rules({ expiresIn: 10 * 60 * 1000 })

          request.cookieAuth.set({ sid })

          console.log('TOKEN SHORTCUT', `${sid}`)

          return h.response({ status: 200, data: { status: newAccount.status, message: newAccount.message } })

        }

      } catch(e) {

        console.log('ERROR:', e)

        Bounce.rethrow(e, 'system')

      }

    },
  },
  Dev: {
    Cache: async (request, h) => {

      console.log('EXECUTE CACHE HANDLER')

      let session = {}

      const token = request.params.token,
        cache = request.server.app.cache

      try {

        session = await cache.get(token)

      } catch(e) {

        console.log('ERROR:', e)

        Bounce.rethrow(e, 'system')

      }

      return h.response({ status: 200, data: { session, cache } })

    }
  },
  Static: {
    Account: async (request,h) => {
      try {

        const _initialState = {...initialState, account: request.pre.account},
          { content, preloadedState }  = ssr(request.url.path, _initialState)

        let response = template("Account Page", preloadedState, content)

        return h.response(response)

      } catch(e) {

        Bounce.rethrow(e, 'system')

      }
    },
    Contact: async (request,h) => {
      try {

        const _initialState = {...initialState, account: request.pre.account},
          { content, preloadedState }  = ssr(request.url.path, _initialState)

        let response = template("Contact", preloadedState, content)

        return h.response(response)

      } catch(e) {

        Bounce.rethrow(e, 'system')

      }
    },
    Home: async (request,h) => {
      try {

        const _initialState = {...initialState, account: request.pre.account},
          { content, preloadedState }  = ssr(request.url.path, _initialState)

        let response = template("Home", preloadedState, content)

        return h.response(response)

      } catch(e) {

        Bounce.rethrow(e, 'system')
      }
    },
    Login: async (request,h) => {
      try {

        const _initialState = {...initialState, account: request.pre.account},
          { preloadedState, content}  = ssr(request.url.path, _initialState)

        let response = template("Login", preloadedState, content)

        return h.response(response)

      } catch(e) {

        Bounce.rethrow(e, 'system')

      }
    },
    NotFound: async (request, h) => {
      try {

        const _initialState = {...initialState, account: request.pre.account},
          { preloadedState, content}  = ssr(request.url.path, _initialState)

        let response = template("Not Found", preloadedState, content)

        return h.response(response)

      } catch(e) {

        Bounce.rethrow(e, 'system')

      }
    },
    Plan: async (request,h) => {
      try {

        const _initialState = {...initialState, account: request.pre.account},
          { content, preloadedState }  = ssr(request.url.path, _initialState)

        let response = template(`Plan ${request.params.id}` , preloadedState, content)

        return h.response(response)

      } catch(e) {

        Bounce.rethrow(e, 'system')
      }
    },
    Product: async (request,h) => {
      try {

        const _initialState = {...initialState, account: request.pre.account},
          { content, preloadedState }  = ssr(request.url.path, _initialState)

        let response = template("Product", preloadedState, content)

        return h.response(response)

      } catch(e) {

        Bounce.rethrow(e, 'system')
      }
    },
    Register: async (request,h) => {
      try {
        const { preloadedState, content}  = ssr(request.url.path, initialState)

        let response = template("Register", preloadedState, content)

        return h.response(response)

      } catch(e) {

        Bounce.rethrow(e, 'system')

      }
    },
    Widgets: async (request,h) => {
      try {

        const _initialState = {...initialState, account: request.pre.account},
          { content, preloadedState }  = ssr(request.url.path, _initialState)

        let response = template("Widgets", preloadedState, content)

        return h.response(response)

      } catch(e) {

        Bounce.rethrow(e, 'system')

      }
    }
  }
}

module.exports = Handlers
