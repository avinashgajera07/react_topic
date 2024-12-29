import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function Update() {
  const { id } = useParams(); // Get the incremental ID from the URL
  const [user, setUser] = useState({ name: "", email: "" }); // User state
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the data for the specific user using the ID from the URL
    axios
      .get(`http://localhost:5000/users`)
      .then((res) => {
        const data = res.data;
        const userToEdit = data[parseInt(id) - 1]; // Map incremental ID to the user
        if (userToEdit) {
          setUser({ id: id, name: userToEdit.name, email: userToEdit.email }); // Set user details
        } else {
          console.log("User not found!");
        }
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Fetch the actual MongoDB _id based on the incremental ID
    axios
      .get(`http://localhost:5000/users`)
      .then((res) => {
        const data = res.data;
        const userId = data[parseInt(id) - 1]._id; // Get original MongoDB _id
        axios
          .put(`http://localhost:5000/users/${userId}`, user)
          .then(() => {
            alert("User updated successfully");
            navigate("/");
          })
          .catch((err) => console.error(err));
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-secondery p-5">
        <h2>Update User</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3 mt-4">
            <label htmlFor="id">Id:</label>
            <input
              type="number"
              disabled
              name="id"
              className="form-control"
              value={user.id}
            />
          </div>
          <div className="mb-3 mt-4">
            <label>Name:</label>
            <input
              type="text"
              className="form-control"
              value={user.name}
              placeholder="Please enter name"
              onChange={(e) => setUser({ ...user, name: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label>Email:</label>
            <input
              type="email"
              className="form-control"
              value={user.email}
              placeholder="Please enter email"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            <i class="fa-solid fa-pen-to-square me-2"></i>
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default Update;
