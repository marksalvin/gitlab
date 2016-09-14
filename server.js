const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const responseTime = require('response-time')
const helmet = require('helmet');
const { apiRoutes } = require('./src/routes');

const app = express();

// Note: Order of middleware matters

app.use(helmet());


// Response time header
app.use(responseTime())

// Enable CORS
app.use(cors());

// Partially addresses OWASP A5
app.disable('x-powered-by');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Parse application/json
app.use(bodyParser.json());

// Routes
apiRoutes(app);

module.exports = app;
