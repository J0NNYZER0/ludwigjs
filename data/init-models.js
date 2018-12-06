'use strict'

const SequelizeAuto = require('sequelize-auto'),
  Path = require('path'),
  auto = new SequelizeAuto('heroku_767494a4db6eba9', 'be3dcb34c0b0f6', '2f171e51', {
     host: 'us-cdbr-iron-east-01.cleardb.net',
     directory: Path.join(__dirname, 'models')
   })

auto.run(function (err) {
  if (err) throw err

  console.log(auto.tables) // table list
  console.log(auto.foreignKeys) // foreign key list
})
