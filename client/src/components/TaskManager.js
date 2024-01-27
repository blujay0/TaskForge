import React, { useState, useEffect } from 'react';
import { getTasks, createTask, updateTask, deleteTask } from '../services/api';

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [authenticated, setAuthenticated] = useState(false); // Track user authentication status

  useEffect(() => {
    // Fetch tasks from the server when the component mounts
    const fetchTasks = async () => {
      try {
        const tasksData = await getTasks();
        setTasks(tasksData);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, []);

  const handleDeleteTask = async (taskId) => {
    try {
      await deleteTask(taskId);
      // After deleting the task, update the task list by fetching tasks again
      const updatedTasks = await getTasks();
      setTasks(updatedTasks);
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const handleLogin = () => {
    // Simulate login by setting the authenticated state to true
    setAuthenticated(true);
  };

  const handleLogout = () => {
    // Simulate logout by setting the authenticated state to false
    setAuthenticated(false);
  };

  return (
    <div>
      <h1>Task Manager</h1>
      {authenticated && (
        <div>
          {/* Add Task UI */}
          <h2>Add Task</h2>
          {/* Add Task Form or Button */}
        </div>
      )}
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>Due Date: {task.dueDate}</p>
            <p>Status: {task.completed ? 'Completed' : 'Pending'}</p>
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
      {!authenticated && (
        <div>
          {/* Login UI */}
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
      {authenticated && (
        <div>
          {/* Logout UI */}
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default TaskManager;