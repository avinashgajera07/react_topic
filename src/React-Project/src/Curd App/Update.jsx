import React from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
import { useEffect } from "react";

function Update() {
  const { id } = useParams();

  const [inputData, setInputData] = useState({
    id: id,
    name: "",
    email: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/users/" + id)
      .then((res) => setInputData(res.data))
      .catch((err) => console.log(err));
    console.log(inputData);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put("http://localhost:3000/users/" + id, inputData).then((res) => {
      alert("Data updated successfully!");
      navigate("/");
    });
  };
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-secondery text-white p-5">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="id">Id:</label>
            <input
              type="number"
              disabled
              name="id"
              className="form-control"
              value={inputData.id}
            />
          </div>
          <div>
            <label htmlFor="name">name:</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Name"
              value={inputData.name}
              onChange={(e) =>
                setInputData({ ...inputData, name: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Email"
              value={inputData.email}
              onChange={(e) =>
                setInputData({ ...inputData, email: e.target.value })
              }
            />
          </div>
          <br />
          <button className="btn btn-info">Update</button>
        </form>
      </div>
    </div>
  );
}

export default Update;
