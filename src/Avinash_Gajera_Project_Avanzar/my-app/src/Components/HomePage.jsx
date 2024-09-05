import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function HomePage() {
  const [data, setData] = useState([]);
  const [loggInUser, setLogInUser] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("loggedInUser");
    setLogInUser(user);
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3000/student")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  console.log("data", data);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/student/${id}`).then((res) => {
      alert("Record deleted successfully");
    });
    setData(data.filter((item) => item.id !== id));
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12">
          <h1>Welcome {loggInUser}</h1>
        </div>
      </div>
      <Link to="/create" className="btn btn-success my-3">
        Create
      </Link>
      <section>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Student Id</th>
              <th scope="col">Student Name</th>
              <th scope="col">Subject</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((student, index) => 
                <tr key={index}>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.subject}</td>
                  <td>
                    <Link
                      className="text-decorataion-none me-2 btn btn-sm btn-success"
                      to={`/update/${student.id}`}
                    >
                      Update
                    </Link>
                    <button
                      className="btn btn-danger"
                      onClick={(e) => handleDelete(student.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              )}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default HomePage;
