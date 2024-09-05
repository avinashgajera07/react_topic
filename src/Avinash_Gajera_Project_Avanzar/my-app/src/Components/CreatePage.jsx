import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreatePage() {
  const [inputData, setInputData] = useState({
    id: "",
    name: "",
    subject: "",
  });
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3000/student",inputData)
      .then((res) => navigate("/homepage"));
    if (inputData) {
      alert("Data posts successfully");
    } else {
      alert("data not submited");
    }
  };
  return (
    <div>
      <section className="bg-light p-3 p-md-4 p-xl-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6 col-xxl-5">
              <div className="card border border-light-subtle rounded-4">
                <div className="card-body p-3 p-md-4 p-xl-5">
                  <div className="row">
                    <div className="col-12">
                      <div className="mb-5">
                        <h4 className="text-center">Student List</h4>
                      </div>
                    </div>
                  </div>
                  <form action="#!" onSubmit={handleSubmit}>
                    <div className="row gy-3 overflow-hidden">
                      <div className="col-12">
                        <div className="form-floating mb-3">
                          <input
                            type="number"
                            className="form-control"
                            name="studentId"
                            id="studentId"
                            placeholder="Enter student number"
                            required
                            min={1}
                            onChange={(e) =>
                              setInputData({
                                ...inputData,
                                id: e.target.value,
                              })
                            }
                          />
                          <label htmlFor="email" className="form-label">
                            Student Id
                          </label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating mb-3">
                          <input
                            type="text"
                            className="form-control"
                            name="studentname"
                            id="studentname"
                            placeholder="Enter student name"
                            required
                            onChange={(e) =>
                              setInputData({
                                ...inputData,
                                name: e.target.value,
                              })
                            }
                          />
                          <label htmlFor="password" className="form-label">
                            Student Name
                          </label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating mb-3">
                          <select
                            className="form-select"
                            aria-label="Default select example"
                            onChange={(e) =>
                              setInputData({
                                ...inputData,
                                subject: e.target.value,
                              })
                            }
                          >
                            <option selected>Select Subject</option>
                            <option value="Maths">Maths</option>
                            <option value="Science">Science</option>
                            <option value="English">English</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="d-grid">
                          <button
                            className="btn bsb-btn-xl btn-primary"
                            type="submit"
                          >
                            Save
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CreatePage;
