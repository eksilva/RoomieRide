const router = require('express').Router();
let Ride = require('../models/ride.model');

router.route('/').get((req,res) => {
  Ride.find()
    .then(rides => res.json(rides))
    .catch(err => res.status(400).json('Error:' + err));
})

router.route('/add').post((req,res) => {
  const { driver, riders, date, time, destination, seats } = req.body;

  const newRide = new Ride({
    driver, 
    riders, 
    date, 
    time, 
    destination, 
    seats
  });

  newRide.save()
    .then(() => res.json('Ride Added'))
    .catch(err => res.status(404).json(console.log(`Error: ${err}`)));
})

module.exports = router;