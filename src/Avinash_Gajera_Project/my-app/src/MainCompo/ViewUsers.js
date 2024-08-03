import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import './ViewUsers.css';

const ViewUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:3000/users');
        setUsers(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="container">
      <h2>Registered Users</h2>
      <div className="user-list">
        {users.map(user => (
          <div key={user._id} className="user-item">
            <span>{user.personName}</span>
            <div className="user-actions">
              <Link to={`/update/${user._id}`}><button>Update</button></Link>
              <Link to={`/delete/${user._id}`}><button>Delete</button></Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewUsers;
