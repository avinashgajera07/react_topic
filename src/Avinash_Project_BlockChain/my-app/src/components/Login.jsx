import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {


  const { register, handleSubmit, reset } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    // Get users from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if the user exists and the password matches
    const user = users.find(
      (user) => user.email === data.email && user.password === data.password
    );

    if (user) {
      // Store user data to sessionstorage
      sessionStorage.setItem("loggedInUser", JSON.stringify(user));
      alert("Login successfully");

      // Navigate to the dashboard
      navigate("/dashboard");
    } else {
      alert("Please enter valid credentials");
    }

    // reset the form
    reset();
  };


  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h2>Login form</h2>
          <div className="card my-5">
            <form
              className="card-body cardbody-color p-lg-5"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="text-center">
                <img
                  src="https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295397__340.png"
                  className="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                  width="200px"
                  alt="profile"
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Please enter email"
                  {...register("email", { required: true })}
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Please enter password"
                  {...register("password", { required: true })}
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-primary px-5 mb-5 w-100"
                >
                  Login
                </button>
              </div>
              <div
                id="emailHelp"
                className="form-text text-center mb-5 text-dark"
              >
                Not Registered? <Link to="/register">Create an Account</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
