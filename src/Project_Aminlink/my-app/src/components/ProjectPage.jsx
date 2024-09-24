import React from "react";
import { MoreVertical } from "lucide-react";
import "./Sidebar.css";

function ProjectPage() {
  const projects = [
    {
      id: 1,
      name: "Software Services Bryan's Megacorporation",
      description:
        "This project is used to record internal expenses such as illness or holidays.",
      position: 2,
      status: "Active",
    },
    {
      id: 2,
      name: "Internal",
      description:
        "This project records all expenses for Bryan's megacorporation",
      position: 1,
      status: "Active",
    },
    {
      id: 3,
      name: "Website Enis Badoglu",
      description:
        "This project records all efforts required to create Enis Badoglu's website.",
      position: 3,
      status: "Active",
    },
    {
      id: 4,
      name: "Software Services Bryan's Megacorporation",
      description:
        "This project is used to record internal expenses such as illness or holidays.",
      position: 0,
      status: "Active",
    },
    {
      id: 5,
      name: "Internal",
      description:
        "This project records all expenses for Bryan's megacorporation",
      position: 4,
      status: "Active",
    },
  ];

  return (
    <div>
      <h2>Project</h2>
      <div className="d-flex justify-content-between mt-5">
        <div className="col-3 ms-3 position-relative">
          <input
            className="form-control ps-5"
            type="text"
            placeholder="Search project"
            style={{ backgroundColor: "transparent" }}
          />
          <span
            className="fa-solid fa-magnifying-glass position-absolute"
            style={{
              left: "15px",
              top: "50%",
              transform: "translateY(-50%)",
              color: "#aaa",
            }}
          />
        </div>
        <div>
          <button className="btn btn-outline-primary mx-2 p-2">
            Show active project
          </button>
          <button className="btn btn-primary mx-2 p-2">Add project</button>
        </div>
      </div>

      {/* Table */}
      <table className="table mt-4 table-dark">
        <thead>
          <tr className="text-left text-gray-500">
            <th className="py-2">No.</th>
            <th>Name</th>
            <th>Position</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project.id} className="border-b border-gray-700">
              <td className="py-3">#{project.id}</td>
              <td>
                <div>{project.name}</div>
                <div className="text-sm text-gray-500">
                  {project.description}
                </div>
              </td>
              <td>
                <i className="fa-solid fa-bookmark"></i> {project.position}
              </td>
              <td>
                <button className="text-gray-400 p-1">Active</button>
              </td>
              <td>
                <button className="text-gray-400">
                  <MoreVertical size={16} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Sticky Footer */}
      <div
        className="d-flex justify-content-between align-items-center p-3"
        style={{
          position: "sticky",
          bottom: 0,
          backgroundColor: "transparent", // Set background to transparent
          color: "white", // Set text color to white
          borderTop: "1px solid rgba(255, 255, 255, 0.2)", // Optional: Light border for visibility
        }}
      >
        {/* Rows per page dropdown */}
        <div className="d-flex align-items-center">
          <label htmlFor="rowsPerPage" className="me-2 mb-0 text-light">
            Show Rows:
          </label>
          <select
            id="rowsPerPage"
            className="form-select form-select-sm text-white bg-dark" // Set dropdown to dark with white text
            style={{ border: "1px solid white", width: "auto" }} // Add white border for better visibility
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
          </select>
        </div>

        {/* Pagination */}
        <div className="pagination d-flex justify-content-end">
          <button className="btn btn-outline-light mx-1">&laquo;</button>
          <button className="btn btn-outline-light mx-1">1</button>
          <button className="btn btn-outline-light mx-1">2</button>
          <button className="btn btn-outline-light mx-1">3</button>
          <button className="btn btn-outline-light mx-1">&raquo;</button>
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;
