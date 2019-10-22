const Sequelize = require('sequelize');
const sequelize = require('../config/db');
const roomModel = require('../Room/models');
const reservationModel = require('../Reservation/models');

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
  salt: {
    type: Sequelize.STRING(300),
  },
}, {
  tableName: 'users',
});

user.hasMany(
  reservationModel, {
    as: 'reservations',
    foreignKey: {
      name: 'guestId',
      allowNull: false,
    },
    sourceKey: 'id',
  },
);

user.hasMany(
  roomModel, {
    as: 'rooms',
    foreignKey: {
      name: 'hostId',
      allowNull: false,
    },
    sourceKey: 'id',
  },
);

module.exports = user;
