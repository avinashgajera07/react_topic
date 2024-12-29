import React, { useState } from "react";
import "./logincss.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Loginpage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://192.168.0.50:5000/api/v1/auth/login",
        {
          username,
          password,
        }
      );

      // token is valid then Redirect homepage
      if (response) {
        console.log("token", response.data.token);
        localStorage.setItem("token", response.data.token);
        navigate("/home");
        setUsername("");
        setPassword("");
      } else {
        setError("Please enter a valid credentials");
        setUsername("");
        setPassword("");
      }
    } catch (err) {
      setError("Failed to login");
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
                <form onSubmit={handleLogin}>
                  <div className="row mb-4 px-3 justify-content-center">
                    <h6 class="mb-0 me-4 mt-2">Login User</h6>
                    <div class="facebook text-center me-3">
                      <div class="fa-brands fa-facebook"></div>
                    </div>
                    <div class="twitter text-center me-3">
                      <div class="fa-brands fa-twitter"></div>
                    </div>
                    <div class="linkedin text-center me-3">
                      <div class="fa-brands fa-linkedin"></div>
                    </div>
                  </div>
                  <div className="row px-3 mb-4">
                    <div className="line" />
                    <small className="or text-center">Or</small>
                    <div className="line" />
                  </div>
                  <div className="row px-3">
                    <label className="mb-1">
                      <h6 className="mb-0 text-sm">Username</h6>
                    </label>
                    <input
                      className="mb-4"
                      type="text"
                      name="username"
                      placeholder="Enter a valid username"
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
                      placeholder="Enter password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  {error && (
                    <div className="row px-3 mb-4">
                      <small className="text-danger">{error}</small>
                    </div>
                  )}
                  <div className="row px-3 mb-4">
                    <a href="#" className="ml-auto mb-0 text-sm">
                      Forgot Password?
                    </a>
                  </div>
                  <div className="row mb-3 px-3">
                    <button type="submit" className="btn btn-blue text-center">
                      Login
                    </button>
                  </div>
                  <div className="row mb-4 px-3">
                    <small className="font-weight-bold">
                      Don't have an account?{" "}
                      <Link to="/register" className="text-danger">
                        Register
                      </Link>
                    </small>
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

export default Loginpage;
