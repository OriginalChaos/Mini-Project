// Import User model and necessary libraries
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Controller function for user login
const loginUser = async (req, res) => {
  try {
    // Extract email and password from request body
    const { email, password } = req.body;

    // Find the user by email in the database
    const user = await User.findOne({ email });

    // If user not found, return error
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Check if the password is correct
    const passwordMatch = await bcrypt.compare(password, user.password);

    // If password is incorrect, return error
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    // If authentication is successful, generate JWT token
    const token = jwt.sign({ userId: user._id }, 'your-secret-key', {
      expiresIn: '1h', // Token expires in 1 hour
    });

    // Send token in the response
    res.status(200).json({ token });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Export the controller function
module.exports = { loginUser };
