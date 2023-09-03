import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function UserHomepage() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/user-management")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));

  }, []);

  return (
    <div className="container mt-5">
      <h2>User Managements</h2>
      <Link to="/usercreate" className="btn btn-success my-3">
        User Create
      </Link>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Employee ID</th>
            <th>Username</th>
            <th>User Type</th>
            <th>Active Status</th>
            <th>Expiry Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, i) => (
            <tr key={i}>
              <td>{d.id}</td>
              <td>{d.employeeid}</td>
              <td>{d.username}</td>
              <td>{d.usertype}</td>
              <td>{d.activestatus}</td>
              <td>{d.expirydate}</td>
              <td>
                <Link
                  className="text-decorataion-none btn btn-sm btn btn-info me-2 p-2"
                  to={`/useredit/${d.id}`}
                >
                  <i className="fas fa-edit ms-1 me-2"></i>Edit
                </Link>
                <button
                  className="text-decorataion-none btn btn-sm btn-danger ms-2 p-2"
                  onClick={(e) => handleDelete(d.id)}
                >
                  <i className="fas fa-solid fa-trash me-1"></i>Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  function handleDelete(id) {
    const confirm = window.confirm("Are you sure delete this data?");
    if (confirm) {
      axios
        .delete("http://localhost:3000/user-management/" + id)
        .then((res) => {
          alert("Record Delete");
          navigate("/");
        });
    }
  }
}

export default UserHomepage;
