const controller = require('./controllers');
const router = require('express').Router();

//Connect controller methods to their corresponding routes
router.get('/rides', controller.rides.get);

router.post('/rides', controller.rides.post);

router.get('/users', controller.users.get);

router.post('/users', controller.users.post);


module.exports = router;