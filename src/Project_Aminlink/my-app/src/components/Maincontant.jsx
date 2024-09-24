// ProjectTable.js
import React from 'react';
import './ProjectTable.css'; // Add styles here

const ProjectTable = ({ projects }) => {
  return (
    <div className="project-table">
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Position</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => (
            <tr key={index}>
              <td>{project.no}</td>
              <td>{project.name}</td>
              <td>{project.position}</td>
              <td>{project.status}</td>
              <td>
                <button>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectTable;
