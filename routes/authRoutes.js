// Import necessary modules
const express = require('express');
const { loginUser, signupUser } = require('../controllers/authController');

// Create an instance of the router
const router = express.Router();

// Define routes for user authentication
router.post('/login', loginUser);
router.post('/signup', signupUser);

// Export the router
module.exports = router;
