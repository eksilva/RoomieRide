const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost:27017/?compressors=disabled&gssapiServiceName=mongodb';

const db = mongoose.connect(mongoUri);

module.exports = db;