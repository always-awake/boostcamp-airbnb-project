const dotenv = require('dotenv');
const app = require('./app');
const sequelize = require('./db');
require('./User/models');
require('./Room/models');
require('./Reservation/models');

dotenv.config();

const PORT = process.env.PORT || 4000;
const handleListening = () => {
  console.log(`✅  Listening on: http://localhost:${PORT}`);
};
app.listen(PORT, handleListening);

sequelize.sync();
