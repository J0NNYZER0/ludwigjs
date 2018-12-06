'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('account', [{
        email: 'jon.ortiz@me.com',
        first_name: 'Jon',
        user_name: 'Jonny',
        is_confirmed: 1,
        is_in_session: 0,
        is_disabled: 0,
        scope: 'admin,super-admin,user',
        created:'2018-11-13 04:06:32'
      }], {})
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('account', null, {})
  }
}
