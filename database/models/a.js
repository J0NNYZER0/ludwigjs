'use strict';
module.exports = (sequelize, DataTypes) => {
  const a = sequelize.define('a', {
    firstName: DataTypes.STRING
  }, {});
  a.associate = function(models) {
    // associations can be defined here
  };
  return a;
};