var models = require('../models');

module.exports = {
  get: function (req, res, callback) {
    res.status(200);
    let names = models.users.getAll( (err, data) =>{
      console.log(data);
      res.send(JSON.stringify(data));
    });
    
  },
  post: function (req, res, callback) {
    console.log(req.body.username);
    models.users.getAll( (err, data) => {
      const contains = (data, target) => {
        for (var i = 0; i < data.length; i++) {
          if (data[i].name === target) {
            return true;
          }
        }
        return false;
      }

      if (contains(data, req.body.username)) {
        models.messages.create( (err, data) => {
          for (var i = 0; i < data.length; i++) {
            if (data[i].name === req.body.username) {
              callback(null, data[i]);
            }
          }
        } )
      }

    })
    res.status(200);

    res.json();
  }
};
