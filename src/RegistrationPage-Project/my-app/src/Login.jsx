import React, { useState } from "react";
import CustomHook from "./Hooks/CustomHook";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";

const Login = () => {
  // const CustHookData = CustomHook({},{usernameError:"",passwordError:""})
  // CustHookData.handleChange
  const navigate = useNavigate();
  const [cookie, setCookie] = useCookies();
  const [required, setRequired] = useState();

  const { handleChange, inp, errors } = CustomHook(
    { username: "", password: "" },
    { usernameError: "", passwordError: "" }
  );
  const LoginForm = async (e) => {
    e.preventDefault();
    // console.log("login click", inp);
    // console.log(Object.keys(inp).length );
    // return false;
    if (Object.keys(inp).length > 0) {
      let url = "https://justjayapi.000webhostapp.com/login";
      let LoginRes = await axios
        .get(url, {
          params: {
            username: inp.username,
            password: inp.password,
          },
        })
        .then(function (response) {
          // console.log("success response",response);
          // return false
          // console.log(response.data.Data[0].role_id);
          if (response.data.Code == 1) {
            setCookie("loginsuccess", 1);
            setCookie("username", response.data.Data[0].username);
            setCookie("password", response.data.Data[0].password);
            if (response.data.Data[0].role_id == 1) {
              navigate("/admin");
            } else {
              navigate("/");
            }
          } else {
            console.log("Invalid user");
          }
          return response;
        })
        .catch(function (error) {
          console.log("If error");
          console.log(error);
        });
    } else {
      setRequired("user name and password is required");
      // console.log("user name and password is required");
    }
    // .finally(function () {
    //     // console.log("always executed");
    //     // always executed
    // });
    // console.log("login click", LoginRes);
  };
  return (
    <div className="login-box">
      <div className="container">
        <div className="form-box">
          <div className="header-form">
            <h4 className="text-primary text-center">
              <i
                className="fa fa-user-circle"
                style={{ fontSize: "110px" }}
              ></i>
            </h4>
            <div className="image"></div>
          </div>
          <div className="body-form">
            <form method="post" onSubmit={LoginForm}>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fa fa-user"></i>
                  </span>
                </div>
                <input
                  type="text"
                  onChange={handleChange}
                  name="username"
                  className="form-control"
                  placeholder="Username"
                />
                {errors.usernameError}
              </div>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fa fa-lock"></i>
                  </span>
                </div>
                <input
                  type="text"
                  onChange={handleChange}
                  name="password"
                  className="form-control"
                  placeholder="Password"
                />
              </div>
              <button type="submit" className="btn btn-secondary btn-block">
                LOGIN
              </button>
              <div className="message">
                <div>
                  <input type="checkbox" /> Remember ME
                </div>
                <div>
                  <a href="#">Forgot your password</a>
                </div>
              </div>
              <div className="">
                <div className="text-center">
                  <Link className="txt-w" to="/register">
                    Click here for create new account
                  </Link>
                </div>
              </div>
            </form>
            <div className="social">
              <a href="#">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter-square"></i>
              </a>
              <a href="#">
                <i className="fab fa-google"></i>
              </a>
            </div>
            {required}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
