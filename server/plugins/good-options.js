'use strict'

module.exports = {
  ops: {
      interval: 1000
  },
  reporters: {
    logReporter: [{
        module: 'good-squeeze',
        name: 'Squeeze',
        args: [{ log: '*', response: '*' }]
      }, {
        module: 'good-console'
      }, 'stdout'
    ],
    errorReporter: [{
        module: 'good-squeeze',
        name: 'Squeeze',
        args: [{ error: '*' }]
      }, {
        module: 'good-squeeze',
        name: 'SafeJson'
      }, {
        module: 'good-file',
        args: ['./logs/errors/log']
    }],
    opsReporter: [{
        module: 'good-squeeze',
        name: 'Squeeze',
        args: [{ ops: '*' }]
      }, {
        module: 'good-squeeze',
        name: 'SafeJson'
      }, {
        module: 'good-file',
        args: ['./logs/ops/log']
    }],
    requestReporter: [{
        module: 'good-squeeze',
        name: 'Squeeze',
        args: [{ request: '*' }]
      }, {
        module: 'good-squeeze',
        name: 'SafeJson'
      }, {
        module: 'good-file',
        args: ['./logs/request/log']
    }],
    responseReporter: [{
        module: 'good-squeeze',
        name: 'Squeeze',
        args: [{ response: '*' }]
      }, {
        module: 'good-squeeze',
        name: 'SafeJson'
      }, {
        module: 'good-file',
        args: ['./logs/response/log']
    }],
    HTTPReporter: [{
        module: 'good-squeeze',
        name: 'Squeeze',
        args: [{ error: '*' }]
      }, {
        module: 'good-http',
        args: ['http://prod.logs:3000', {
          wreck: {
            headers: { 'x-api-key': 12345 }
        }
      }]
    }]
  }
}
