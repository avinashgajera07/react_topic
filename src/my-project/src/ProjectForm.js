import React, { useState } from 'react';

const ProjectForm = ({ onSubmit }) => {
  const [projectName, setProjectName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(projectName);
    setProjectName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text" 
        placeholder="Enter project name"
        value={projectName}
        onChange={(e) => setProjectName(e.target.value)}
      /> <br />
      <button type="submit">Create Project</button>
    </form>
  );
};

export default ProjectForm;
