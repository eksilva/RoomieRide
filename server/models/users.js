const db = require('../database');

module.exports = {
  getAll: (callback) => {
    db.dbConnection.query('SELECT name FROM Users', (err, results) => {
      if (err) { callback(err); }
      else {
        callback(null, results)
      }
    });
  },

  create: (callback) => {
    var username = [];
    db.dbConnection.query('INSERT INTO Users (name) VALUES (?)', username , (err, results) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, results);
      }
    });

  }
}
