import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState('');

  return (
    <div>
      <h2>Task List</h2>
      {error && <div>{error}</div>}
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;