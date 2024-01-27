import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import TaskManager from './components/TaskManager';

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(true);
  const [showRegisterForm, setShowRegisterForm] = useState(false);

  const handleLogin = () => {
    setAuthenticated(true);
    setShowLoginForm(false);
    setShowRegisterForm(false);
  };

  const handleLogout = () => {
    setAuthenticated(false);
    setShowLoginForm(true);
    setShowRegisterForm(false);
  };

  const handleRegister = () => {
    setShowLoginForm(false);
    setShowRegisterForm(true);
  };

  return (
    <div>
      <h1>Task Manager</h1>
      {!authenticated && showLoginForm && <LoginForm onLogin={handleLogin} onRegister={handleRegister} setAuthenticated={setAuthenticated} />}
      {!authenticated && showRegisterForm && <RegisterForm onRegister={handleRegister} setAuthenticated={setAuthenticated} />}
      {authenticated && <TaskManager onLogout={handleLogout} />}
    </div>
  );
};

export default App;
