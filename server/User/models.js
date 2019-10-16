const Sequelize = require('sequelize');
const sequelize = require('../config/db');

const user = sequelize.define('user', {
  id: {
    type: Sequelize.BIGINT,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  accountId: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  accountPw: {
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
