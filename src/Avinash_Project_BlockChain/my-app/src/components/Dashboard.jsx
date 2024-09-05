import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Dashboard = () => {


  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  // Get user data from localstorage
  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);
  }, []);

  // For delete user
  const handleDelete = (username) => {
    const updatedUsers = users.filter((user) => user.name !== username);
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  // Navigate to the Register component with the user data to edit
  const handleEdit = (user) => {
    navigate("/register", { state: { editUser: user } });
  };

  
  return (
    <div className="container">
      <h2 className="text-center my-5">User Dashboard</h2>
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Username</th>
                <th scope="col">Email</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <button
                      className="btn btn-warning me-2"
                      onClick={() => handleEdit(user)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(user.name)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Link to="/register" className="btn btn-primary">
            Create New User
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
