'use strict'

const Hapi=require('hapi'),
  Good = require('good'),
  GoodOptions = require('./plugins/good-options'),
  HapiAutCookie = require('hapi-auth-cookie'),
  Inert = require('inert'),
  Routes = require('./routes')

// Create a server with a host and port
const server = Hapi.server({
    host:'0.0.0.0',
    port: process.env.PORT || 3000,
    state: { ignoreErrors: true }
})

// Setup cache
const cache = server.cache({
  segment: 'session'
})

// Assign cache to server
server.app.cache = cache


// Start the server
async function start() {

    // Register plugins
    await server.register([{plugin: Good, options: GoodOptions}, HapiAutCookie, Inert])

    // Configure auth strategy
    server.auth.strategy('session', 'cookie', {
      password: 'a1276d5c-24fc-4d40-b4b5-4134f51e',
      cookie: 'sid',
      redirectTo: '/login',
      isSecure: false,
      isHttpOnly: false,
      validateFunc: async (request, session) => {

        const cached = await cache.get(session.sid),
          out = { valid: !!cached }

        if (out.valid) {

          out.credentials = cached
        }

        return out
      }
    })

    // Assign default strategy
    server.auth.default('session')

    // Add the routes
    server.route(Routes)

    try {

        await server.start()
    }
    catch (e) {

        console.log(e)
        process.exit(1)
    }

    console.log('Server running at:', server.info.uri)
}

start()
