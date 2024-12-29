import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";

function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/users")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this record?"
    );
    if (confirmDelete) {
      axios.delete(`http://localhost:5000/users/${id}`).then((res) => {
        setData(data.filter((item) => item.id !== id));
      });
    }
  };

  return (
    <div className="container mt-5">
      <h2>CURD Operation</h2>
      <Link to="/create" className="btn btn-success my-3">
        <i class="fa-solid fa-plus me-2"></i>
        Create
      </Link>
      <Table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{d.name}</td>
              <td>{d.email}</td>
              <td>
                <Link
                  className="text-decorataion-none me-2 btn btn-sm btn-success"
                  to={`/update/${index + 1}`}
                >
                  <i class="fa-solid fa-pen-to-square me-2"></i>
                  Update
                </Link>
                <button
                  className="text-decorataion-none me-2 btn btn-sm btn-danger"
                  onClick={(e) => handleDelete(d.id)}
                >
                  <i class="fa-solid fa-trash me-2"></i>
                  Delete
                </button>
                <Link
                  className="text-decorataion-none btn btn-sm btn-primary"
                  to={`/read/${index + 1}`}
                >
                  <i class="fa-brands fa-readme me-2"></i>
                  Read
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Home;
