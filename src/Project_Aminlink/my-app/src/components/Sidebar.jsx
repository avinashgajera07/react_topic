// Sidebar.js
import React, { useState } from 'react';
import './Sidebar.css'; // Add your styles here

const Sidebar = () => {
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  const toggleAdmin = () => {
    setIsAdminOpen(!isAdminOpen);
  };

  return (
    <div className="sidebar">
      <div className="logo">hourhub</div>
      <ul>
        <li>Dashboard</li>
        <li>Timesheets</li>
        <li>Project Overview</li>
        <li>
          <div onClick={toggleAdmin} className="admin-dropdown">
            Admin {isAdminOpen ? '-' : '+'}
          </div>
          {isAdminOpen && (
            <ul className="admin-menu">
              <li>Customers</li>
              <li>Projects</li>
              <li>Employees</li>
              <li>Working Schemes</li>
              <li>Public Holidays</li>
              <li>Workload Schemes</li>
            </ul>
          )}
        </li>
      </ul>
      <div className="user-profile">
        <img src="profile-pic-url" alt="User" /> {/* Replace with user image */}
        <span>Anna Burton</span>
        <button className="logout-btn">Logout</button>
      </div>
    </div>
  );
};

export default Sidebar;
