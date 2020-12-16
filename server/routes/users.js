const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req,res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error:' + err));
})

router.route('/add').post((req,res) => {
  const { fbID, name, email, picture } = req.body;

  const newUser = new User({
    fbID, 
    name, 
    email, 
    picture
  });

  newUser.save()
    .then(() => res.json('User Added'))
    .catch(err => res.status(404).json(console.log(`Error: ${err}`)));
})

module.exports = router;