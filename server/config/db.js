const Sequelize = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
);

sequelize
  .authenticate()
  .then(async () => {
    console.log('✅  Connection has been established successfully.');

    // database sync
    require('../User/models');
    require('../Room/models');
    require('../Reservation/models');
    await sequelize.sync();

    // update dummy data
    const { updateUserData } = require('../utils/batchJob/users');
    const { updateRoomData } = require('../utils/batchJob/rooms');
    await updateUserData();
    await updateRoomData();
  })
  .catch((err) => {
    console.error('❌  Unable to connect to the database:', err);
  });

module.exports = sequelize;
