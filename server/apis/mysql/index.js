'use strict'

const Bounce = require('bounce'),
  Mysql = require('mysql'),
  env = process.env.NODE_ENV || 'development',
  config = require('../../../data/models').config,
  connectionString = `mysql://${config.username}:${config.password}@${config.host}/${config.database}`,
  MysqlPool = Mysql.createPool(connectionString),
  ReadSqlFile = require('../../utilities').ReadFileAsync,
  FormatSql = (sql, values) => {

    if (values) {

      if (values instanceof Array) {

      }

      else {

        values = Object.values(values)
      }

      sql = Mysql.format(sql, values)
    }

    return sql
  }

module.exports = {

  QueryHandler: (pathToSqlFile, values) => new Promise ((resolve, reject) => MysqlPool
    .getConnection((err, connection) => {

      if (err) reject(err) // not connected!

      const sql = values !== undefined ? FormatSql(ReadSqlFile(pathToSqlFile), values) : ReadSqlFile(pathToSqlFile).toString()

      try {
        if (!connection) {

          throw new Error('Connection string is not available')

        } else {

          return connection.query(sql, (error, results) => {

            // When done with the connection, release it.
            connection.release()

            // Handle error after the release.
            if (error) reject(error)

            resolve(results)

            // Don't use the connection here, it has been returned to the pool.
        })

        }

      } catch(e) {

        console.log('ERROR:', e)

        Bounce.rethrow(e, 'system')

      }

    }))
}
