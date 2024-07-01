import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Table } from "react-bootstrap";

function Home() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  // useEffect(() => {
  //   const unloadCallback = (event) => {
  //     event.preventDefault();
  //     event.returnValue = "";
  //     return "";
  //   };

  //   window.addEventListener("beforeunload", unloadCallback);
  //   return () => window.removeEventListener("beforeunload", unloadCallback);
  // }, []);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this record?");
    if (confirmDelete) {
      axios.delete(`http://localhost:3000/users/${id}`).then((res) => {
        alert("Record deleted successfully");
        // Update state after deletion
        setData(data.filter((item) => item.id !== id));;
        // Optionally, you can re-fetch data from the server
        // fetchData();
      });
    }
  };

  return (
    <div className="container mt-5">
      <h2>CURD Operation</h2>
      <Link to="/create" className="btn btn-success my-3">
        Create +
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
          {data.map((d, i) => (
            <tr key={i}>
              <td>{d.id}</td>
              <td>{d.name}</td>
              <td>{d.email}</td>
              <td>
                <Link
                  className="text-decorataion-none me-2 btn btn-sm btn-success"
                  to={`/update/${d.id}`}
                >
                  Update
                </Link>
                <button
                  className="text-decorataion-none me-2 btn btn-sm btn-danger"
                  onClick={(e) => handleDelete(d.id)}
                >
                  Delete
                </button>
                <Link
                  className="text-decorataion-none btn btn-sm btn-primary"
                  to={`/read/${d.id}`}
                >
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
