const mongoose = require('mongoose');

require('dotenv').config();

const mongoUri = process.env.MONGOURI;

const db = mongoose.connect(mongoUri, { useNewUrlParser: true });

const connection = mongoose.connection;

connection.once('open', () => {
  console.log("MongoDB Database Local Connection Successful!");
});

module.exports = db;