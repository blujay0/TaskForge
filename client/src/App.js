import React, { useState } from 'react';
import TaskManager from './components/TaskManager';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(true); // Initial state: show login form

  const handleLogin = () => {
    setAuthenticated(true);
  };

  const handleRegister = () => {
    setShowLoginForm(true); // Show the login form after registering
  };

  const toggleForm = () => {
    setShowLoginForm((prevShowLoginForm) => !prevShowLoginForm); // Toggle between login and register forms
  };

  return (
    <div>
      <h1>Task Manager</h1>
      {!authenticated && showLoginForm && <LoginForm onLogin={handleLogin} setAuthenticated={setAuthenticated} />}
      {!authenticated && !showLoginForm && <RegisterForm onRegister={handleRegister} />}
      {authenticated && <TaskManager />}
      <button onClick={toggleForm}>Switch Form</button> {/* button to switch between login and register forms */}
    </div>
  );
};

export default App;
