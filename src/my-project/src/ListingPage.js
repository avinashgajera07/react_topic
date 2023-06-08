import React from 'react';

const ListingPage = ({ projects, tasks }) => {
  const calculateTotalHours = () => {
    let totalHours = 0;
    tasks.forEach((task) => {
      totalHours += parseInt(task.timeSpent);
    });
    return totalHours;
  };

  return (
    <div>
      <h2>Projects</h2>
      <ul>
        {projects.map((project) => (
          <li key={project}>{project}</li>
        ))}
      </ul>

      <h2>Tasks</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <h3>{task.taskName}</h3>
            <p>Time Spent: {task.timeSpent} hours</p>
            <p>Description: {task.description}</p>
          </li>
        ))}
      </ul>

      <h2>Total Hours Covered (Daily)</h2>
      <p>{calculateTotalHours()} hours</p>
    </div>
  );
};

export default ListingPage;

