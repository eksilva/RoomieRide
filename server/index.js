const express = require('express');
const path = require('path');
const parser = require('body-parser');
const app = express();
const port = 3000;

// Router 
const router = require('./routes.js');

// Database
const Database = require('./database');

app.use(parser.json());

// Set up our routes
app.use('/api', router);

app.use('/', express.static(path.join(__dirname, '/../client/dist')));


app.listen(port, () => {
  console.log(`Roomie Ride listening at http://localhost:${port}`);
});