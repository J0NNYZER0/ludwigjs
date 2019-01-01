'use strict';
module.exports = (sequelize, DataTypes) => {
  const b = sequelize.define('b', {
    firstName: DataTypes.STRING
  }, {});
  b.associate = function(models) {
    // associations can be defined here
  };
  return b;
};