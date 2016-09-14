// require('dotenv').config({ silent: true });
const app = require('./server');
const PORT = 3000;//process.env.PORT;

const server = app.listen(PORT, () => {
  console.log('Server running on port %d', PORT);
});

process.on('SIGTERM', () => {
  console.log('Shutting down...');

  server.close(() => app.shutdown());
});