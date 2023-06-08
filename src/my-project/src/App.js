import React, { useState } from 'react';
import ProjectForm from './ProjectForm';
import TaskForm from './TaskForm';
import ListingPage from './ListingPage.js';

const App = () => {
  const [projects, setProjects] = useState([]);
  const [tasks, setTasks] = useState([]);

  const handleProjectSubmit = (projectName) => {
    setProjects([...projects, projectName]);
  };

  const handleTaskSubmit = (taskData) => {
    setTasks([...tasks, taskData]);
  };

  return (
    <div>
      <h1>Project and Task Manager</h1>
      <ProjectForm onSubmit={handleProjectSubmit} />
      <TaskForm onSubmit={handleTaskSubmit} />
      <ListingPage projects={projects} tasks={tasks} />
    </div>
  );
};

export default App;
