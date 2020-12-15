var models = require('../models');

module.exports = {

  get: function (req, res) {
    
    res.status(200);
    res.send(models.rides.getAll((err, data) => {
      return data;
    }));
    
  }, // a function which handles a get request for all messages
  post: function (req, res) {
      res.status(200);
      res.send(models.rides.create((err, data) => {
        return data;
      }));
    }
    // a function which handles posting a message to the database
};
