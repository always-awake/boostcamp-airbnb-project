const Sequelize = require('sequelize');
const sequelize = require('../config/db');
const user = require('../User/models');

const room = sequelize.define('room', {
  pk: {
    type: Sequelize.BIGINT,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  bio: {
    type: Sequelize.STRING(500),
    allowNull: false,
  },
  mainPhoto: {
    type: Sequelize.STRING(500),
    allowNull: false,
  },
  type: {
    type: Sequelize.ENUM(
      'Whole house',
      'Private room',
      'Hotel room',
      'Shared room',
    ),
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
  facilities: {
    type: Sequelize.STRING,
  },
}, {
  charset: 'utf8',
  tableName: 'rooms',
});

user.hasMany(
  room, {
    as: 'rooms',
    foreignKey: {
      name: 'hostPk',
      allowNull: false,
    },
    sourceKey: 'pk',
  },
);

module.exports = room;
