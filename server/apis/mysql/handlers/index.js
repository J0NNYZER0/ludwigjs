'use strict'

const Mysql = require('mysql'),
  MysqlPool = require('../index').MysqlPool,
  ReadSqlFile = require('../../../utilities').ReadFileAsync,
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

      const sql = FormatSql(ReadSqlFile(pathToSqlFile), values)

      return connection.query(sql, (error, results) => {
        // When done with the connection, release it.
        connection.release()

        if (error) reject(error)
        // Handle error after the release.
        resolve(results)

        // Don't use the connection here, it has been returned to the pool.
      })
    }))
}
