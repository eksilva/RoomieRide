const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  id: {type: String, required: true},
  name: String,
  email: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;