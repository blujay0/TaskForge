import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  return (
    <div>
      <h2>Login</h2>
      {error && <div>{error}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email;</label>
          <input type="email" value={email} onChange={handleEmailChange} required/>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;