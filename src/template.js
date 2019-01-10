"use strict"
const serialize = require('serialize-javascript')

function template(title, initialState = {}, content = "") {
  let scripts = ''
  if(content){
    scripts = `<script>window.__STATE__ = ${serialize(initialState)}</script>
                <script src="/assets/server.js"></script>`
  } else {
    scripts = `<script src="/assets/client.js"> </script>`
  }
  return `<!DOCTYPE html>
      <html>
        <head>
          <title>${title}</title>
          <link rel='shortcut icon' type='image/x-icon' href='/favicon.ico' />
          <link href='/assets/styles/all.css' rel='stylesheet'/>
        </head>
        <body>
          <div class='content'>
            <div id='app' class='wrap-inner'>${content}</div>
          </div>
          ${scripts}
        </body>
      </html>`
}

module.exports = template
