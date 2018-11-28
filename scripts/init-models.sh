#!/usr/bin/env bash

node_modules/.bin/sequelize model:generate --name a --attributes firstName:string --options-path=database/options.js
node_modules/.bin/sequelize model:generate --name b --attributes firstName:string --options-path=database/options.js
