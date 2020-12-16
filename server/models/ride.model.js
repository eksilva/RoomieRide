const mongoose = require('mongoose');
let User = require('./user.model');

const rideSchema = new mongoose.Schema({
  driver: {},
  riders: [],
  date: String,
  time: String,
  destination: String,
  seats: Number
});

const Ride = mongoose.model('Ride', rideSchema);

module.exports = Ride;