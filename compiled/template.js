"use strict";

var serialize = require('serialize-javascript');

function template(title) {
  var initialState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var content = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
  var scripts = '';

  if (content) {
    scripts = " <script>window.__STATE__ = ".concat(serialize(initialState), "</script>\n                <script src=\"/assets/server.js\"></script>\n                ");
  } else {
    scripts = " <script src=\"/assets/client.js\"> </script> ";
  }

  return "<!DOCTYPE html>\n      <html>\n        <head>\n          <title>".concat(title, "</title>\n          <link rel='shortcut icon' type='image/x-icon' href='/favicon.ico' />\n          <link href='/assets/styles/all.css' rel='stylesheet'/>\n        </head>\n        <body>\n          <div class='content'>\n            <div id='app' class='wrap-inner'>").concat(content, "</div>\n          </div>\n          ").concat(scripts, "\n        </body>\n      </html>");
}

module.exports = template;