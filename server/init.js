const http = require('http');
const dotenv = require('dotenv');

dotenv.config();

// setting app
const app = require('./app');

const PORT = process.env.PORT || 4000;
const handleListening = () => {
  console.log(`✅  Listening on: http://localhost:${PORT}`);
};
app.set('port', PORT);

// setting server
const server = http.createServer(app);
server.listen(PORT, handleListening);
