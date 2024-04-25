import React, { useState } from 'react';
import './SignupForm.css'; // Import the corresponding CSS file
import axios from 'axios'

const SignupForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Signup form submitted:', { name, email, password });
    setName('');
    setEmail('');
    setPassword('');
    try {
        // Make POST request to backend signup endpoint
        const response = await axios.post('http://localhost:3000/signup', {
          email,
          password,
        });
  
        console.log(response.data); // Handle success response
      } catch (error) {
        console.error('Error signing up:', error); // Handle error
      }
  };

  return (
    <div className="form-container"> {/* Apply the CSS class for styling */}
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignupForm;
