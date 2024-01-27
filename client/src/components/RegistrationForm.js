import React, { useState } from 'react';
import axios from 'axios';

const RegistrationForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

const handleEmailChange = e => {
  setEmail(e.target.value);
}

const handlePasswordChange = e => {
  setPassword(e.target.value);
}

const handleSubmit = async e => {
  e.preventDefault();
  try {
    const response = await axios.post('/api/register', { email, password });
    // reset error state and set success message
    setError('');
    setSuccessMessage('Registration successful');
    // log the response for debuggin purposes
    console.log('Registration successful:', response.data)
  } catch (error) {
    // handle registration error
    setError('Registration failed');
    console.error('Registration error:', error);
  }
};

  return (
    <div>
      <h2>Register</h2>
      {error && <div>{error}</div>}
      {successMessage && <div>{successMessage}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} required/>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;