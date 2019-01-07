#!/usr/bin/env bash

sleep 10
node_modules/.bin/sequelize db:create --options-path=data/index.js
node_modules/.bin/sequelize db:migrate --options-path=data/index.js
node_modules/.bin/sequelize db:seed:all --options-path=data/index.js
