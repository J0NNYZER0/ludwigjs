'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('account', {
  		id: {
  			type: DataTypes.INTEGER(11),
  			allowNull: false,
  			primaryKey: true,
  			autoIncrement: true
  		},
  		email: {
  			type: DataTypes.STRING(245),
  			allowNull: false,
  			unique: true
  		},
  		first_name: {
  			type: DataTypes.STRING(245),
  			allowNull: true
  		},
  		user_name: {
  			type: DataTypes.STRING(245),
  			allowNull: false,
  			defaultValue: ''
  		},
  		is_confirmed: {
  			type: DataTypes.INTEGER(1),
  			allowNull: false,
  			defaultValue: '0'
  		},
  		is_in_session: {
  			type: DataTypes.INTEGER(1),
  			allowNull: false,
  			defaultValue: '0'
  		},
  		is_disabled: {
  			type: DataTypes.INTEGER(1),
  			allowNull: false,
  			defaultValue: '0'
  		},
  		scope: {
  			type: DataTypes.STRING(45),
  			allowNull: false,
  			defaultValue: ''
  		},
  		created: {
  			type: DataTypes.DATE,
  			allowNull: true,
  			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
  		}
  	}, {
  		tableName: 'account'
  	})
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('account')
  }
}
