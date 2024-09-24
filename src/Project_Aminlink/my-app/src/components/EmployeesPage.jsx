import React from "react";
import { ArrowLeft } from "lucide-react";
import "./Sidebar.css";

function EmployeesPage() {
  return (
    <div className="container mt-2" style={{ paddingBottom: "40px" }}>
    <div></div>
    <div className="d-flex justify-content-start">
      <button
        className="btn btn-outline-light border-0 "
        style={{
          backgroundColor: "transparent",
          color: "white",
        }}
      >
        <ArrowLeft size={18} /> Back
      </button>
    </div>
    <h3 className=" mt-3">Edit Employee</h3>
    <div className="mt-4 col-8">
      <div className="mb-3">
        <label htmlFor="name" className="form-label text-light">
          Name
        </label>
        <input
          type="text"
          className="form-control transparent-input"
          id="name"
          placeholder="Enter employee name"
        />
      </div>
  
      <div className="mb-3">
        <label htmlFor="email" className="form-label text-light">
          Email
        </label>
        <input
          type="email"
          className="form-control transparent-input"
          id="email"
          placeholder="Enter employee email"
        />
      </div>
  
      <div className="mb-3">
        <label htmlFor="workingScheme" className="form-label text-light">
          Assign Working Scheme
        </label>
        <input
          type="text"
          className="form-control transparent-input"
          id="workingScheme"
          placeholder="Assign a working scheme"
        />
      </div>
  
      <div className="row">
        <div className="col-md-6 mb-3">
          <label htmlFor="fromDate" className="form-label text-light">
            From Date
          </label>
          <input
            type="date"
            className="form-control transparent-input"
            id="fromDate"
          />
        </div>
  
        <div className="col-md-6 mb-3">
          <label htmlFor="toDate" className="form-label text-light">
            To Date
          </label>
          <input
            type="date"
            className="form-control transparent-input"
            id="toDate"
          />
        </div>
      </div>
    </div>
  
    <div className="row mt-4">
      <h5 className="card-title">Past Workload Schemes</h5>
      <div className="col-8 mt-3">
        <div
          className="card bg-dark text-light transparent-input"
          style={{ borderRadius: "8px" }}
        >
          <div
            className="card-body transparent-input"
            style={{ borderRadius: "8px" }}
          >
            <span className="transparent-input">Internal</span>
            <br />
            <span className="transparent-input">
              This project records all expenses for Bryan's megacorporation
            </span>
            <div className="transparent-input">
              <div className="d-flex justify-content-between text-center ms-2 transparent-input">
                <span>S</span>
                <span>M</span>
                <span>T</span>
                <span>W</span>
                <span>T</span>
                <span>F</span>
                <span>S</span>
              </div>
              <div className="d-flex justify-content-between text-center ms-2 transparent-input mt-2">
                <span>4.5</span>
                <span>6</span>
                <span>4.5</span>
                <span>4.5</span>
                <span>6.6</span>
                <span>4.5</span>
                <span>4.5</span>
              </div>
              <br />
              <span className="transparent-input">
                15-08-2024 to 21-08-2024
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  
    <div className="row mt-4">
      <div className="col-8 mt-3">
        <div
          className="card bg-dark text-light transparent-input"
          style={{ borderRadius: "8px" }}
        >
          <div
            className="card-body transparent-input"
            style={{ borderRadius: "8px" }}
          >
            <span className="transparent-input">Internal</span>
            <br />
            <span className="transparent-input">
              This project records all expenses for Bryan's megacorporation
            </span>
            <div className="transparent-input">
              <div className="d-flex justify-content-between text-center ms-2 transparent-input">
                <span>S</span>
                <span>M</span>
                <span>T</span>
                <span>W</span>
                <span>T</span>
                <span>F</span>
                <span>S</span>
              </div>
              <div className="d-flex justify-content-between text-center ms-2 transparent-input mt-2">
                <span>4.5</span>
                <span>6</span>
                <span>4.5</span>
                <span>4.5</span>
                <span>6.6</span>
                <span>4.5</span>
                <span>4.5</span>
              </div>
              <br />
              <span className="transparent-input">
                15-08-2024 to 21-08-2024
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  
    <div className="d-flex mt-4" style={{ gap: "16px" }}>
      <button className="btn btn-primary btn-save">Save</button>
      <button className="btn btn-outline-light btn-cancel">Cancel</button>
    </div>
  </div>
  
  );
}

export default EmployeesPage;
