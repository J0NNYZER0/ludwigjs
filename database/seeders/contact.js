'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('contact', [{
        email: 'jon.ortiz@me.com',
        subject: 'Jon',
        contact_type: 'Jonny',
        message: 'Hello',
        created:'2018-11-13 04:06:32'
      }], {})
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('contact', null, {})
  }
}
