import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Register = () => {


  const { register, handleSubmit, reset, setValue } = useForm();

  const navigate = useNavigate();
  const location = useLocation();
  const editUser = location.state?.editUser; // Get the passed editUser data

  useEffect(() => {
    // If editUser is availabel,set the value of edit user data
    if (editUser) {
      setValue("name", editUser.name);
      setValue("email", editUser.email);
      setValue("password", editUser.password);
    }
  }, [editUser, setValue]);


  const onSubmit = (data) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (editUser) {
      // Update existing user
      const updatedUsers = users.map((user) =>
        user.name === editUser.name ? data : user
      );
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      alert("User updated successfully");
      navigate("/dashboard");
    } else {
      // Create new user
      users.push(data);
      localStorage.setItem("users", JSON.stringify(users));
      alert("User registered successfully");
      navigate("/");
    }

    // reset the form
    reset();
  };


  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h2 className="text-center text-dark mt-5">
            {editUser ? "Edit User" : "Register User"}
          </h2>
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
                  id="Username"
                  placeholder="User Name"
                  {...register("name", { required: true })}
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Email"
                  {...register("email", { required: true })}
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  {...register("password", { required: true })}
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-primary px-5 mb-5 w-100"
                >
                  {editUser ? "Update" : "Submit"}
                </button>
              </div>
              {!editUser && (
                <div
                  id="emailHelp"
                  className="form-text text-center mb-5 text-dark"
                >
                  Already Registered? <Link to="/">Go to Login</Link>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
