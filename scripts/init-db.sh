#!/usr/bin/env bash

sleep 20
node_modules/.bin/sequelize db:create --options-path=database/options.js
node_modules/.bin/sequelize db:migrate --options-path=database/options.js
node_modules/.bin/sequelize db:seed:all --options-path=database/options.js
node server/index.js