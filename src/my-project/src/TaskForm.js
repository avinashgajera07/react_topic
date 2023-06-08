import React, { useState } from 'react';

const TaskForm = ({ onSubmit }) => {
  const [taskName, setTaskName] = useState('');
  const [timeSpent, setTimeSpent] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ taskName, timeSpent, description });
    setTaskName('');
    setTimeSpent('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
        <h2>Task Details</h2>
      <input
        type="text"
        placeholder="Enter task name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      /> <br />
      <input
        type="number"
        placeholder="Enter time spent on the project (in hours)"
        value={timeSpent}
        onChange={(e) => setTimeSpent(e.target.value)}
      /> <br />
      <textarea
        placeholder="Enter task description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea> <br />
      <button type="submit">Create Task</button>
    </form>
  );
};

export default TaskForm;
