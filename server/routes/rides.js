const router = require('express').Router();
let Ride = require('../models/ride.model');

router.route('/').get((req,res) => {

  // TODO: write find function to find rides relevant to logged in user, e.g. where driver = [driver's userID] || where riders includes [driver's userID]
  
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