const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  id: String,
  name: String,
  email: String,
});

const rideSchema = new mongoose.Schema({
  id: String,
  driver: userSchema,
  riders: [userSchema],
  departure: String,
  destination: String,
  seats: Number
});

const Ride = mongoose.model('Ride', rideSchema);

module.exports = Ride;