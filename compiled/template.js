"use strict";var serialize=require("serialize-javascript");function template(a){var b=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:"",d="";return d=c?"<script>window.__STATE__ = ".concat(serialize(b),"</script>\n                <script src=\"/assets/server.js\"></script>"):"<script src=\"/assets/client.js\"> </script>","<!DOCTYPE html>\n      <html>\n        <head>\n          <title>".concat(a,"</title>\n          <link rel='shortcut icon' type='image/x-icon' href='/favicon.ico' />\n          <link href='/assets/styles/all.css' rel='stylesheet'/>\n        </head>\n        <body>\n          <div class='content'>\n            <div id='app' class='wrap-inner'>").concat(c,"</div>\n          </div>\n          ").concat(d,"\n        </body>\n      </html>")}module.exports=template;