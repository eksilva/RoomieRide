const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fbID: {type: String, required: true},
  name: String,
  email: String,
  picture: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;