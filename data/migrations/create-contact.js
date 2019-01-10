'use strict'
const DataTypes = require('sequelize/lib/data-types');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('contact', {
  		id: {
  			type: DataTypes.INTEGER(11),
  			allowNull: false,
  			primaryKey: true,
  			autoIncrement: true
  		},
  		email: {
  			type: DataTypes.STRING(255),
  			allowNull: false
  		},
  		subject: {
  			type: DataTypes.STRING(255),
  			allowNull: false
  		},
  		contact_type: {
  			type: DataTypes.INTEGER(1),
  			allowNull: false
  		},
  		message: {
  			type: DataTypes.STRING(255),
  			allowNull: false,
  			defaultValue: ''
  		},
  		created: {
  			type: DataTypes.DATE,
  			allowNull: true,
  			defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
  		}
  	}, {
  		tableName: 'contact'
  	})
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('contact')
  }
}
