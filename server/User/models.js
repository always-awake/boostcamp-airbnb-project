const Sequelize = require('sequelize');
const sequelize = require('../db');

const user = sequelize.define('user', {
  pk: {
    type: Sequelize.BIGINT,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  id: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
}, {
  tableName: 'users',
});


module.exports = user;
