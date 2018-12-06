/* jshint indent: 1 */
'use strict'

const DataTypes = require('sequelize/lib/data-types');

module.exports = (sequelize, DataTypes) => {

	const account = sequelize.define('account', {
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

	account.associate = models => {
    // associations can be defined here
  }
	return account
}
