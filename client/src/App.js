import React from 'react';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import TaskManager from './components/TaskManager';

const App = () => {
  return (
    <div>
      <h1>Task Manager App</h1>
      <LoginForm />
      <hr />
      <RegisterForm />
      <hr />
      <TaskManager />
    </div>
  );
};

export default App;
