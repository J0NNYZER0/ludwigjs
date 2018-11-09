'use strict'

const Joi = require('joi'),
  Path = require('path'),
  PreHandlers = require('../prehandlers'),
  Handlers = require('../handlers')

const Routes = [
  // /
  {
    method:'GET',
    path:'/',
    options: {
      auth: false,
      cache: {
        expiresIn: 30 * 1000,
        privacy: 'public'
      },
      pre: [
        { method: PreHandlers.GetCookies, assign: 'cookies' },
        { method: PreHandlers.GetAccount, assign: 'account' }
      ],
      handler: Handlers.Static.Home
    }
  },
  // /account
  {
    method:'GET',
    path:'/account',
    options: {
      pre: [
        { method: PreHandlers.GetCookies, assign: 'cookies' },
        { method: PreHandlers.GetAccount, assign: 'account' }
      ],
      handler: Handlers.Static.Account
    }
  },
  // /assets/{asset*}
  {
    method: 'GET',
    path: '/assets/{asset*}',
    options: {
      auth: false,
      handler: {
        directory: {
          path: Path.join(__dirname, '../../assets'),
          listing: false
        }
      }
    }
  },
  // /contact
  {
    method:'GET',
    path:'/contact',
    options: {
      auth: false,
      cache: {
        expiresIn: 30 * 1000,
        privacy: 'public'
      },
      pre: [
        { method: PreHandlers.GetCookies, assign: 'cookies' },
        { method: PreHandlers.GetAccount, assign: 'account' }
      ],
      handler: Handlers.Static.Contact
    }
  },
  // /login/{sid?}
  {
    method:'GET',
    path:'/login/{sid?}',
    options: {
      auth: { mode: 'try' },
      pre: [
        { method: PreHandlers.GetCookies, assign: 'cookies' },
        { method: PreHandlers.GetAccount, assign: 'account' }
      ],
      handler: Handlers.Static.Login
    }
  },
  // /plan/{id?}
  {
    method:'GET',
    path:'/plan/{id?}',
    options: {
      auth: false,
      cache: {
        expiresIn: 30 * 1000,
        privacy: 'public'
      },
      pre: [
        { method: PreHandlers.GetCookies, assign: 'cookies' },
        { method: PreHandlers.GetAccount, assign: 'account' }
      ],
      handler: Handlers.Static.Plan
    }
  },
  // /product
  {
    method:'GET',
    path:'/product',
    options: {
      auth: false,
      cache: {
        expiresIn: 30 * 1000,
        privacy: 'public'
      },
      pre: [
        { method: PreHandlers.GetCookies, assign: 'cookies' },
        { method: PreHandlers.GetAccount, assign: 'account' }
      ],
      handler: Handlers.Static.Product
    }
  },
  // /register
  {
    method:'GET',
    path:'/register',
    options: {
      auth: false,
      cache: {
        expiresIn: 30 * 1000,
        privacy: 'public'
      },
      pre: [
        { method: PreHandlers.GetCookies, assign: 'cookies' }
      ],
      handler: Handlers.Static.Register
    }
  },
  // /widgets
  {
    method:'GET',
    path:'/widgets',
    options: {
      auth: false,
      cache: {
        expiresIn: 30 * 1000,
        privacy: 'public'
      },
      pre: [
        { method: PreHandlers.GetCookies, assign: 'cookies' },
        { method: PreHandlers.GetAccount, assign: 'account' }
      ],
      handler: Handlers.Static.Widgets
    }
  },
  // /api/v1/contact
  {
    method: 'POST',
    path: '/api/v1/contact',
    options: {
      auth: false,
      cors: {
        origin: ['*'],
        credentials: true
      },
      handler: Handlers.Api.Contact,
      validate: {
        payload: {
          email: Joi.string().min(6).required(),
          subject: Joi.string(),
          contact_type: Joi.number(),
          message: Joi.string()
        }
      }
    }
  },
  // /api/v1/login/{sid?}
  {
    method: 'GET',
    path: '/api/v1/login/{sid}',
    options: {
      auth: false,
      cors: {
        origin: ['*'],
        credentials: true
      },
      pre: [
        { method: PreHandlers.GetCookies, assign: 'cookies' }
      ],
      handler: Handlers.Api.Login,
      validate: {
        params: {
          sid: Joi.string().min(8).required()
        }
      }
    }
  },
  // /api/v1/logging-in
  {
    method: 'POST',
    path: '/api/v1/logging-in',
    options: {
      auth: false,
      cors: {
        origin: ['*'],
        credentials: true
      },
      pre: [
        { method: PreHandlers.GetCookies, assign: 'cookies' }
      ],
      handler: Handlers.Api.LoggingIn,
      validate: {
        payload: {
          email: Joi.string().min(6).required()
        }
      }
    }
  },
  // /api/v1/logout
  {
    method: 'POST',
    path: '/api/v1/logout',
    options: {
      auth: false,
      cors: {
        origin: ['*'],
        credentials: true
      },
      handler: Handlers.Api.Logout
    }
  },
  // /api/v1/register
  {
    method: 'POST',
    path: '/api/v1/register',
    options: {
      auth: false,
      cors: {
        origin: ['*'],
        credentials: true
      },
      handler: Handlers.Api.Register,
      validate: {
        payload: {
          email: Joi.string(),
          first_name: Joi.string(),
          user_name: Joi.string()
        }
      }
    }
  },
  // /{p*}
  {
    method: '*',
    path: '/{p*}',
    options: {
      auth: false,
      handler: Handlers.Static.NotFound
    }
  }
]

module.exports = Routes
