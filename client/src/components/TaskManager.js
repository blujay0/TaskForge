import React, { useEffect } from 'react';

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [newTaskName, setNewTaskName] = useState('');

  useEffect(() => {
    // fetch tasks from the server when the component mounts
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await getTasks();
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const handleCreateTask = async () => {
    try {
      const response = await createTask({ name: newTaskName });
      setTasks([...tasks, response.data]);
      setNewTaskName('');
    } catch (error) {
      console.error('Error creating task:', error);
    }
  };

  const handleUpdateTask = async (id, newName) => {
    try {
      await updateTask(id, { name: newName });
      const updatedTasks = tasks.map(task =>
        task._id === id ? { ...task, name: newName } : task
      );
      setTasks(updatedTasks);
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  const handleDeleteTask = async id => {
    try {
      await deleteTask(id);
      const filteredTasks = tasks.filter(task => task._id !== id);
      setTasks(filteredTasks);
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <div>
      <h2>Task Manager</h2>
      <div>
        <input
          type="text"
          value={newTaskName}
          onChange={e => setNewTaskName(e.target.value)}
        />
        <button onClick={handleCreateTask}>Add Task</button>
      </div>
      <ul>
        {tasks.map(task => (
          <li key={task._id}>
            <input
              type="text"
              value={task.name}
              onChange={e => handleUpdateTask(task._id, e.target.value)}
            />
            <button onClick={() => handleDeleteTask(task._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;
