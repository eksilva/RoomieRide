const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const parser = require('body-parser');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// dotenv for db config

app.use(cors());
app.use(express.json());

const mongoUri = process.env.MONGOURI;
mongoose.connect(mongoUri, { useNewUrlParser: true, useCreateIndex: true });

const connection = mongoose.connection;

connection.once('open', () => {
  console.log("MongoDB Database Local Connection Successful!");
});

app.use(parser.json());

// Set up our routes
app.use('/', express.static(path.join(__dirname, '/../client/dist')));

const rideRouter = require('./routes/rides');
const userRouter = require('./routes/users');

app.use('/api/rides', rideRouter);
app.use('/api/users', userRouter);

app.listen(port, () => {
  console.log(`Roomie Ride listening at http://localhost:${port}`);
});