import React, { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

function Create() {
  const navigate = useNavigate();
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("http://localhost:3000/users", inputData).then((res) => {
      if (inputData) {
        alert("Data posts successfully!");
        navigate("/");
      } else {
        alert("data not submited");
      }
    });
  };
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-secondery p-5">
        <h2>Create User</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3 mt-4">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="please enter name"
              onChange={(e) =>
                setInputData({ ...inputData, name: e.target.value })
              }
            />
          </div>
          <div className="mb-3 mt-4">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Please enter email"
              onChange={(e) =>
                setInputData({ ...inputData, email: e.target.value })
              }
            />
          </div>
          <br />
          <button className="btn btn-info">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Create;
