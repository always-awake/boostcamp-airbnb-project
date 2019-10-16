const Sequelize = require('sequelize');
const sequelize = require('../config/db');
const user = require('../User/models');
const room = require('../Room/models');

const reservation = sequelize.define('reservation', {
  id: {
    type: Sequelize.BIGINT,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  checkIn: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  checkOut: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  totalPrice: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  headCount: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  adultCount: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  childCount: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  babyCount: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
}, {
  tableName: 'reservations',
});

user.hasMany(
  reservation, {
    as: 'reservations',
    foreignKey: {
      name: 'guestId',
      allowNull: false,
    },
    sourceKey: 'id',
  },
);

room.hasMany(
  reservation, {
    as: 'reservations',
    foreignKey: {
      name: 'roomId',
      allowNull: false,
    },
    sourceKey: 'id',
  },
);

module.exports = reservation;
