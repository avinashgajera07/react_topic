import { useNavigate } from "react-router";
import { useFormik } from "formik";
import axios from "axios";
import { useState } from "react";
import { signUpSchema } from "../../schemas";

const initialValues = {
  username: "",
  password: "",
  confirm_password: "",
  employeeid: "",
  usertype: "",
  joiningdate: "",
  expirydate: "",
  activestatus: false,
  neverexpired: false,
};

function UserCreate() {
  const [inputData, setInputData] = useState({
    username: "",
    password: "",
    confirm_password: "",
    employeeid: "",
    usertype: "",
    joiningdate: "",
    expirydate: "",
    activestatus: "",
    neverexpired: "",
  });

  const { values, errors, handleBlur, touched, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        axios
          .post("http://localhost:3000/user-management", inputData)
          .then((res) => {
            if (initialValues !== "") {
              alert("Data posts successfully!");
              navigate("/");
            } else {
              alert("data not submited");
            }
          });
        action.resetForm();
      },
    });
  // console.log("1_" + errors);

  const navigate = useNavigate();

  return (
    <div className="form_wrapper">
      <div className="container">
        <div className="row justify-content-center d-flex">
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
                      type="name"
                      autoComplete="off"
                      name="username"
                      className="form-control input-label"
                      id="username"
                      placeholder="Username"
                      value={values.username}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      onMouseLeave={(e) =>
                        setInputData({ ...inputData, username: e.target.value })
                      }
                    />
                    {errors.username && touched.username ? (
                      <p className="form-error" style={{ color: "red" }}>
                        {errors.username}
                      </p>
                    ) : null}
                  </div>

                  <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                      type="password"
                      autoComplete="off"
                      className="form-control input-label"
                      id="password"
                      name="password"
                      placeholder="password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      onMouseLeave={(e) =>
                        setInputData({ ...inputData, password: e.target.value })
                      }
                    />
                    {errors.password && touched.password ? (
                      <p className="form-error mt-0" style={{ color: "red" }}>
                        {errors.password}
                      </p>
                    ) : null}
                  </div>

                  <div className="form-group">
                    <label htmlFor="confirm_password">Confirm Password:</label>
                    <input
                      type="password"
                      className="form-control input-label"
                      id="confirm_password"
                      name="confirm_password"
                      value={values.confirm_password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      onMouseLeave={(e) =>
                        setInputData({
                          ...inputData,
                          confirm_password: e.target.value,
                        })
                      }
                    />
                    {errors.confirm_password && touched.confirm_password ? (
                      <p className="form-error" style={{ color: "red" }}>
                        {errors.confirm_password}
                      </p>
                    ) : null}
                  </div>

                  <div className="form-group">
                    <label htmlFor="employeeid">Employee Id:</label>
                    <input
                      type="number"
                      className="form-control input-label"
                      id="employeeid"
                      name="employeeid"
                      min="1"
                      value={values.employeeid}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      onMouseLeave={(e) =>
                        setInputData({
                          ...inputData,
                          employeeid: e.target.value,
                        })
                      }
                    />
                    {errors.employeeid && touched.employeeid ? (
                      <p className="form-error" style={{ color: "red" }}>
                        {errors.employeeid}
                      </p>
                    ) : null}
                  </div>

                  <div className="form-group">
                    <label htmlFor="usertype">User Type:</label>
                    <select
                      className="form-control input-label"
                      id="userType"
                      name="usertype"
                      value={values.usertype}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      onMouseLeave={(e) =>
                        setInputData({ ...inputData, usertype: e.target.value })
                      }
                    >
                      <option value="">Select User Type:</option>
                      <option value="admin">Admin</option>
                      <option value="user">User</option>
                    </select>
                    {errors.usertype && touched.usertype ? (
                      <p className="form-error" style={{ color: "red" }}>
                        {errors.usertype}
                      </p>
                    ) : null}
                  </div>

                  <div className="form-group">
                    <label htmlFor="joiningdate">Joining Date:</label>
                    <input
                      type="date"
                      id="joiningdate"
                      className="form-control input-label"
                      name="joiningdate"
                      value={values.joiningdate}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      onMouseLeave={(e) =>
                        setInputData({
                          ...inputData,
                          joiningdate: e.target.value,
                        })
                      }
                    />
                    {errors.joiningdate && touched.joiningdate ? (
                      <p className="form-error" style={{ color: "red" }}>
                        {errors.joiningdate}
                      </p>
                    ) : null}
                  </div>

                  <div className="form-group">
                    <label htmlFor="expirydate">Expiry Date:</label>
                    <input
                      type="date"
                      id="expirydate"
                      className="form-control input-label"
                      name="expirydate"
                      value={values.expirydate}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      onMouseLeave={(e) =>
                        setInputData({
                          ...inputData,
                          expirydate: e.target.value,
                        })
                      }
                    />
                    {errors.expirydate && touched.expirydate ? (
                      <p className="form-error" style={{ color: "red" }}>
                        {errors.expirydate}
                      </p>
                    ) : null}
                  </div>

                  <div className="form-group d-flex">
                    <div className="form-group ">
                      <label htmlFor="activestatus">Active Status:</label>
                      <input
                        type="checkbox"
                        id="activestatus"
                        className="input-label ms-2"
                        name="activestatus"
                        value={values.activestatus}
                        onChange={handleChange}
                        onBlur={handleBlur}
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
                        className="ms-2"
                        name="neverexpired"
                        value={values.neverexpired}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        onMouseLeave={(e) =>
                          setInputData({
                            ...inputData,
                            neverexpired: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div>
                    <button type="submit" className="btn btn-primary">
                      Add
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

export default UserCreate;
