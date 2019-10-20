const Sequelize = require('sequelize');
const sequelize = require('../config/db');
const reservationModel = require('../Reservation/models');

const room = sequelize.define('room', {
  id: {
    type: Sequelize.BIGINT,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  type: {
    type: Sequelize.ENUM(
      'Whole',
      'Private',
      'Hotel',
      'Shared',
    ),
    allowNull: false,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  thumbnail: {
    type: Sequelize.STRING(500),
    allowNull: false,
  },
  price: {
    type: Sequelize.BIGINT,
    allowNull: false,
    defaultValue: 0,
  },
  bedCount: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  bedroomCount: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  bathroomCount: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  isSuperHost: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  headCount: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
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
  option: {
    type: Sequelize.STRING,
  },
  star: {
    type: Sequelize.FLOAT,
    allowNull: false,
    defaultValue: 0,
  },
}, {
  charset: 'utf8',
  tableName: 'rooms',
});

room.hasMany(
  reservationModel, {
    as: 'reservations',
    foreignKey: {
      name: 'roomId',
      allowNull: false,
    },
    sourceKey: 'id',
  },
);

module.exports = room;
