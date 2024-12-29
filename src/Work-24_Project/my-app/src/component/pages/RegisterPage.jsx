import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";  
import "./logincss.css"

function RegisterPage() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://192.168.0.50:5000/api/v1/auth/register",
        {
          name,
          username,
          password,
        }
      );

      if (response.status === 201) {
        setSuccess("Registration successful!");
        setTimeout(() => navigate("/"), 2000);
        setName("");
        setUsername("");
        setPassword("");
      } else {
        setError("Registration failed. Please try again.");
        setName("");
        setUsername("");
        setPassword("");
      }
    } catch (err) {
      setError("Failed to register");
      setName("");
      setUsername("");
      setPassword("");
    }
  };
  return (
    <div>
      <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
        <div className="card card0 border-0">
          <div className="row d-flex">
            <div className="col-lg-6">
              <div className="card1 pb-5">
                <div className="row">
                  <img src="https://i.imgur.com/CXQmsmF.png" className="logo" />
                </div>
                <div className="row px-3 justify-content-center mt-4 mb-5 border-line">
                  <img
                    src="https://i.imgur.com/uNGdWHi.png"
                    className="image"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card2 card border-0 px-4 py-5">
                <form onSubmit={handleRegister}>
                  <div className="row mb-4 px-3 justify-content-center">
                    <h6 className="mb-0 me-4 mt-2">Register with</h6>
                    <div className="facebook text-center me-3">
                      <div className="fa-brands fa-facebook" />
                    </div>
                    <div className="twitter text-start me-3">
                      <div className="fa-brands fa-twitter" />
                    </div>
                    <div className="linkedin text-center me-3">
                      <div className="fa-brands fa-linkedin" />
                    </div>
                  </div>
                  <div className="row px-3 mb-4">
                    <div className="line" />
                    <small className="or text-center">Or</small>
                    <div className="line" />
                  </div>
                  <div className="row px-3">
                    <label className="mb-1">
                      <h6 className="mb-0 text-sm">Fullname</h6>
                    </label>
                    <input
                      className="mb-4"
                      type="text"
                      name="username"
                      placeholder="Please enter fullname"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="row px-3">
                    <label className="mb-1">
                      <h6 className="mb-0 text-sm">Username</h6>
                    </label>
                    <input
                      className="mb-4"
                      type="text"
                      name="username"
                      placeholder="Please enter username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div className="row px-3">
                    <label className="mb-1">
                      <h6 className="mb-0 text-sm">Password</h6>
                    </label>
                    <input
                      type="password"
                      name="password"
                      placeholder="Please enter password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  {error && (
                    <div className="row px-3 mb-4">
                      <small className="text-danger">{error}</small>
                    </div>
                  )}
                  {success && (
                    <div className="row px-3 mb-4">
                      <small className="text-success">{success}</small>
                    </div>
                  )}
                  <div className="row mb-3 px-3">
                    <button type="submit" className="btn btn-blue text-center">
                      Register
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
