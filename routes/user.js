// routes/user.js

const router = require('express').Router();
const User = require('../models/user.model');

router.route('/login').post((req, res) => {
    const { username, password } = req.body;

    User.findOne({ username, password })
        .then(user => {
            if (user) {
                res.json('Login successful');
            } else {
                res.status(400).json('Invalid credentials');
            }
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
