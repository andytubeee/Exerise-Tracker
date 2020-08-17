const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const age = Number(req.body.age);
  const newUser = new User({ username, age });

  newUser
    .save()
    .then(() => res.json('User successfully created!'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
