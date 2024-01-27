import React, { useState } from 'react';
import { registerUser } from '../services/api';

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      await registerUser(username, password);
      console.log('User registered successfully');
    } catch (error) {
      if (error.response && error.response.data) {
        console.error('Registration failed:', error.response.data.message);
      } else {
        console.error('Registration failed:', error.message);
      }
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegisterForm;
