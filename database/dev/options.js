const Path = require('path')

module.exports =  {
  config: Path.join(__dirname, 'config.json'),
  'migrations-path': Path.join(__dirname, 'migrations'),
  'seeders-path': Path.join(__dirname, 'seeders'),
  'models-path': Path.join(__dirname, 'model'),
}
