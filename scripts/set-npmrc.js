'use strict'

if (process.env.NODE_ENV !== 'production') {

  return

}

const Fs = require('fs')

Fs.writeFileSync('.npmrc', '//registry.npmjs.org/:_authToken=${NPM_TOKEN}')

Fs.chmodSync('.npmrc', 0600)
