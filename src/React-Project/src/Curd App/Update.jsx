import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function Update() {
  const { id } = useParams();
  const [user, setUser] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the user data based on their MongoDB `_id`
    axios
      .get(`http://localhost:3000/users`)
      .then((res) => {
        const data = res.data;
        console.log(data,"data")
        const userToEdit = data[parseInt(id) - 1];
        console.log(userToEdit,"ucghs")
        if (userToEdit) {
          setUser({
            id: userToEdit.id,
            name: userToEdit.name,
            email: userToEdit.email,
          }); 
        } else {
          console.error("User not found!");
        }
      })
      .catch((err) => console.error(err));
    console.log("user", user);
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Update the user data
    axios
      .put(`http://localhost:3000/users/${user.id}`, {
        name: user.name,
        email: user.email,
      })
      .then(() => {
        alert("User updated successfully");
        navigate("/");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-secondery p-5">
        <h2>Update User</h2>
        <form onSubmit={handleSubmit}>
        <div className="mb-3 mt-4">
            <label>Name:</label>
            <input
              type="text"
              className="form-control"
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
            />
          </div>
          <div className="mb-3 mt-4">
            <label>Email:</label>
            <input
              type="email"
              className="form-control"
              value={user.email}
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
