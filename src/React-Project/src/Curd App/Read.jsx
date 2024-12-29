import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

function Read() {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch the data for the specific user using the ID from the URL
    axios
      .get(`http://localhost:5000/users`)
      .then((res) => {
        const data = res.data;
        const userToEdit = data[parseInt(id) - 1]; // Map incremental ID to the user
        if (userToEdit) {
          setData({ id: id, name: userToEdit.name, email: userToEdit.email }); // Set user details
        } else {
          console.log("User not found!");
        }
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-secondery p-5">
        <h2>Read User Data</h2>
        <div className="mb-3 mt-4">
          <label htmlFor="id">Id:</label>
          <input
            type="number"
            disabled
            name="id"
            className="form-control"
            value={data.id}
          />
        </div>
        <div className="mb-3 mt-4">
          <label>Name:</label>
          <input
            type="text"
            className="form-control"
            value={data.name}
            disabled
          />
        </div>
        <div className="mb-3">
          <label>Email:</label>
          <input
            type="email"
            className="form-control"
            value={data.email}
            disabled
          />
        </div>
        <Link
          className="text-decorataion-none btn btn-primary"
          to={"/"}
        >
          <i class="fa-solid fa-backward me-2"></i>
          Back
        </Link>
      </div>
    </div>
  );
}

export default Read;
