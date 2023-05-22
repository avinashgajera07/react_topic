import React from "react";
import { useFormik } from "formik";
import { signUpSchema } from "../schemas";

const ininitialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
};
const Registration = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: ininitialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
      },
    });
  console.log(errors);

  return (
    <div className="bg-image">
      <section className="text-center">
        <div
          className="card mx-4 mx-md-5 shadow-5-strong"
          style={{
            margintop: -100,
            background: `hsla(0, 0%, 100%, 0.8)`,
            backdropfilter: "blur(30)",
          }}
        >
          <div className="card-body py-5 px-md-5">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-8">
                <h2 className="fw-bold mb-5">Sign up now</h2>

                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="form-outline mb-4">
                      <div className="form-outline">
                        <label className="form-label" htmlFor="form3Example1">
                          First name
                        </label>
                        <input
                          type="text"
                          name="name"
                          placeholder="name"
                          id="name"
                          className="form-control"
                          value={values.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {errors.name && touched.name ? (
                          <p className="form-error">{errors.name}</p>
                        ) : null}
                      </div>
                    </div>

                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form3Example3">
                        Email address
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="email_address"
                        id="email"
                        className="form-control"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.email && touched.email ? (
                        <p className="form-error">{errors.email}</p>
                      ) : null}
                    </div>

                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form3Example4">
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        placeholder="password"
                        id="password"
                        className="form-control"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.password && touched.password ? (
                        <p className="form-error">{errors.password}</p>
                      ) : null}
                    </div>
                  </div>

                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form3Example4">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      name="confirm_password"
                      placeholder="confirm_password"
                      id="confirm_password"
                      className="form-control"
                      value={values.confirm_password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.confirm_password && touched.confirm_password ? (
                      <p className="form-error">{errors.confirm_password}</p>
                    ) : null}
                  </div>

                  <div className="form-check d-flex justify-content-center mb-4">
                    <label
                      className="form-check-label"
                      htmlFor="form2Example33"
                    >
                      Subscribe to our newsletter
                    </label>
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      value=""
                      id="form2Example33"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary btn-block mb-4"
                  >
                    Sign up
                  </button>

                  <div className="text-center">
                    <p>or sign up with:</p>
                    <button
                      type="button"
                      className="btn btn-link btn-floating mx-1"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </button>

                    <button
                      type="button"
                      className="btn btn-link btn-floating mx-1"
                    >
                      <i className="fab fa-google"></i>
                    </button>

                    <button
                      type="button"
                      className="btn btn-link btn-floating mx-1"
                    >
                      <i className="fab fa-twitter"></i>
                    </button>

                    <button
                      type="button"
                      className="btn btn-link btn-floating mx-1"
                    >
                      <i className="fab fa-github"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Registration;
