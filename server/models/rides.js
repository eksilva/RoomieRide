const db = require('../database');

module.exports = {
  getAll: (callback) => {
    db.dbConnection.query('SELECT body FROM Messages', (error, results) => {
      if (error) { callback(error); }
      else {
        callback(null, results);
      }
    });

  }, // a function which produces all the messages
  create: (callback) => {
    let message = [];
    db.dbConnection.query('INSERT INTO Messages (body) VALUES (?);', message, (err, results) => {
      if (err) { callback(err); }
      else {
        console.log(message);
        callback(null, results);
      }
    })
  } // a function which can be used to insert a message into the database
};
