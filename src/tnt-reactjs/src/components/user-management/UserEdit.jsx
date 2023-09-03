import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

// const initialValues = {
//     username: "",
//     password: "",
//     confirm_password: "",
//     employeeid: "",
//     usertype: "",
//     joiningdate: "",
//     expirydate: "",
//     activestatus: '',
//     neverexpired: ''
// };

function UserEdit() {
  const [inputData, setInputData] = useState({
    username: "",
    password: "",
    confirm_password: "",
    employeeid: "",
    usertype: "",
    joiningdate: "",
    expirydate: "",
    activestatus: false,
    neverexpired: false,
  });
  const [errors, setErrors] = useState({
    username: "",
    password: "",
    confirm_password: "",
    employeeid: "",
    usertype: "",
    joiningdate: "",
    expirydate: "",
  });

  const navigate = useNavigate();
  const { id } = useParams();

  // const formik = useFormik({
  //     initialValues: inputData,
  //     validationSchema: signUpSchema,
  //     onSubmit: (value, action) => {
  //         // console.log(inputData);
  //         action.resetForm();
  //     }
  // });
  // // console.log(errors);

  useEffect(() => {
    axios
      .get("http://localhost:3000/user-management/" + id)
      .then((res) => setInputData(res.data))
      .catch((err) => console.log(err));
    // console.log(initialValues);
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();

    //validation on edit button
    // const emptyFields = Object.keys(inputData).filter((key) => !inputData[key]);
    // if (emptyFields.length > 0) {
    //     const fieldErrors = {};
    //     emptyFields.forEach((field) => {
    //         fieldErrors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
    //     });
    //     setErrors(fieldErrors);
    //     return; // Exit early if any field is empty
    // }

    // Convert activestatus to boolean
    const activestatus = inputData.activestatus === "true";
    axios
      .put("http://localhost:3000/user-management/" + id, inputData)
      .then((res) => {
        console.log(res);
        alert("Data updated successfully!");
        navigate("/");
      });
  };

  return (
    <div className="form_wrapper">
      <div className="container">
        <div className="row justify-content-center  d-flex">
          <div className="col-md-6 mt-3 mb-2">
            <div className="card">
              <div className="card-header">
                <h3 className="header-font">User Management</h3>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      name="username"
                      autoComplete="off"
                      value={inputData.username}
                      // onChange={handleChange}
                      onChange={(e) => {
                        const username = e.target.value;
                        setInputData({ ...inputData, username });

                        if (!e.target.value) {
                          setErrors({
                            ...errors,
                            username: "Username is required",
                          });
                        } else {
                          setErrors({ ...errors, username: "" });
                        }
                      }}
                    />
                    {errors.username && (
                      <p className="form-error" style={{ color: "red" }}>
                        {errors.username}
                      </p>
                    )}
                    {/* {errors.username ? (<p className='form-error' style={{ color: 'red' }}>{errors.username}</p>) : null} */}
                  </div>

                  <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      autoComplete="off"
                      value={inputData.password}
                      // onChange={handleChange}
                      onChange={(e) => {
                        const password = e.target.value;
                        setInputData({ ...inputData, password });

                        if (!e.target.value) {
                          setErrors({
                            ...errors,
                            password: "password is required",
                          });
                        } else {
                          setErrors({ ...errors, password: "" });
                        }
                      }}
                    />
                    {errors.password && (
                      <p className="form-error" style={{ color: "red" }}>
                        {errors.password}
                      </p>
                    )}
                    {/* {errors.password ? (<p className='form-error' style={{ color: 'red' }}>{errors.password}</p>) : null} */}
                  </div>

                  <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input
                      type="password"
                      className="form-control"
                      id="confirmPassword"
                      name="confirmPassword"
                      autoComplete="off"
                      value={inputData.confirm_password}
                      // onChange={handleChange}
                      onChange={(e) => {
                        const confirm_password = e.target.value;
                        setInputData({ ...inputData, confirm_password });
                        if (confirm_password !== inputData.password) {
                          setErrors({
                            ...errors,
                            confirm_password:
                              "confirm password must be same as password",
                          });
                        } else {
                          setErrors({ ...errors, confirm_password: "" });
                        }
                      }}
                    />
                    {errors.confirm_password && (
                      <p className="form-error" style={{ color: "red" }}>
                        {errors.confirm_password}
                      </p>
                    )}
                    {/* {errors.confirm_password ? (<p className='form-error' style={{ color: 'red' }}>{errors.confirm_password}</p>) : null} */}
                  </div>

                  <div className="form-group">
                    <label htmlFor="employeeid">Employee Id:</label>
                    <input
                      type="number"
                      className="form-control"
                      id="employeeid"
                      name="employeeid"
                      autoComplete="off"
                      value={inputData.employeeid}
                      // onChange={handleChange}
                      onChange={(e) => {
                        setInputData({
                          ...inputData,
                          employeeid: e.target.value,
                        });
                        if (!e.target.value) {
                          setErrors({
                            ...errors,
                            employeeid: "employeeid is required",
                          });
                        } else {
                          setErrors({ ...errors, employeeid: "" });
                        }
                      }}
                    />
                    {errors.employeeid && (
                      <p className="form-error" style={{ color: "red" }}>
                        {errors.employeeid}
                      </p>
                    )}
                    {/* {errors.employeeid ? (<p className='form-error' style={{ color: 'red' }}>{errors.employeeid}</p>) : null} */}
                  </div>

                  <div className="form-group">
                    <label htmlFor="userType">User Type:</label>
                    <select
                      className="form-control"
                      id="usertype"
                      name="usertype"
                      autoComplete="off"
                      value={inputData.usertype}
                      // onChange={handleChange
                      onChange={(e) => {
                        setInputData({
                          ...inputData,
                          usertype: e.target.value,
                        });
                        if (!e.target.value) {
                          setErrors({
                            ...errors,
                            usertype: "usertype is required",
                          });
                        } else {
                          setErrors({ ...errors, usertype: "" });
                        }
                      }}
                    >
                      <option value="">Select User Type:</option>
                      <option value="admin">Admin</option>
                      <option value="user">User</option>
                    </select>
                    {errors.usertype && (
                      <p className="form-error" style={{ color: "red" }}>
                        {errors.usertype}
                      </p>
                    )}
                    {/* {errors.usertype ? (<p className='form-error' style={{ color: 'red' }}>{errors.usertype}</p>) : null} */}
                  </div>

                  <div className="form-group">
                    <label htmlFor="joiningdate">Joining Date:</label>
                    <input
                      type="date"
                      id="joiningdate"
                      className="form-control"
                      name="joiningdate"
                      autoComplete="off"
                      value={inputData.joiningdate}
                      // onChange={handleChange}
                      onChange={(e) => {
                        setInputData({
                          ...inputData,
                          joiningdate: e.target.value,
                        });
                        if (!e.target.value) {
                          setErrors({
                            ...errors,
                            joiningdate: "joiningdate is required",
                          });
                        } else {
                          setErrors({ ...errors, joiningdate: "" });
                        }
                      }}
                    />
                    {errors.joiningdate && (
                      <p className="form-error" style={{ color: "red" }}>
                        {errors.joiningdate}
                      </p>
                    )}
                    {/* {errors.joiningdate ? (<p className='form-error' style={{ color: 'red' }}>{errors.joiningdate}</p>) : null} */}
                  </div>

                  <div className="form-group">
                    <label htmlFor="expirydate">Expiry Date:</label>
                    <input
                      type="date"
                      id="expirydate"
                      className="form-control"
                      name="expirydate"
                      autoComplete="off"
                      value={inputData.expirydate}
                      // onChange={handleChange}
                      onChange={(e) => {
                        setInputData({
                          ...inputData,
                          expirydate: e.target.value,
                        });
                        if (!e.target.value) {
                          setErrors({
                            ...errors,
                            expirydate: "expirydate is required",
                          });
                        } else {
                          setErrors({ ...errors, expirydate: "" });
                        }
                      }}
                    />
                    {errors.expirydate && (
                      <p className="form-error" style={{ color: "red" }}>
                        {errors.expirydate}
                      </p>
                    )}
                    {/* {errors.expirydate ? (<p className='form-error' style={{ color: 'red' }}>{errors.expirydate}</p>) : null} */}
                  </div>

                  <div className="form-group d-flex">
                    <div className="form-group ">
                      <label htmlFor="activestatus">Active Status:</label>
                      <input
                        type="checkbox"
                        id="activestatus"
                        className="form-check-input ms-2"
                        name="activestatus"
                        // value={values.activestatus}
                        // onChange={handleChange}
                        // onBlur={handleBlur}
                        onMouseLeave={(e) =>
                          setInputData({
                            ...inputData,
                            activestatus: e.target.value,
                          })
                        }
                      />
                    </div>

                    <div className="form-group ms-5">
                      <label htmlFor="neverexpired">Never Expired:</label>
                      <input
                        type="checkbox"
                        id="neverexpired"
                        className="form-check-input ms-2"
                        name="neverexpired"
                        // onChange={handleChange}
                        // value={inputData.neverexpired}
                        // checked={inputData.neverexpired}
                        // onChange={(e) => {
                        //   setInputData({
                        //     ...inputData,
                        //     neverexpired: !inputData.neverexpired,
                        //   });
                        // }}
                        checked={inputData.neverexpired === true}
                        onChange={(e) =>
                          setInputData({
                            ...inputData,
                            neverexpired: e.target.checked,
                          })
                        }
                      />
                    </div>
                  </div>

                  <div>
                    <button type="submit" className="btn btn-primary">
                      Edit
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

export default UserEdit;
