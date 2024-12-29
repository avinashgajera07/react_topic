import React, { useEffect, useState } from "react";
import axios from "axios";

function Homepage() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const apiUrl = "http://192.168.0.50:5000/api/v1/movie/search";

  useEffect(() => {
    fetchMovies(currentPage, searchQuery);
  }, [currentPage, searchQuery]);

  const fetchMovies = async (page = 1, query = "") => {
    const token =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzFiNTg3ZDA0ZGRiZGQ0OWRhYmUzMzkiLCJpYXQiOjE3Mjk4NDUzOTEsImV4cCI6MTczMDQ1MDE5MX0.3VB4CeXF4z9gnjnq6uTjmvwl_NDQGWbAe9c_X286fKo";

    try {
      const response = await axios.get(
        `${apiUrl}?query=${query}&page=${page}`,
        {
          headers: {
            Authorization: token,
          },
        }
      );

      console.log("Data", response);
      if (response.data && Array.isArray(response.data.data.movies)) {
        setData(response.data.data.movies);
        setTotalPages(response.data.totalPages || 0);
      } else {
        console.error("Unexpected response structure:", response.data);
        setData([]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setData([]);
    }
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSearch = () => {
    setCurrentPage(1);
    fetchMovies(1, searchQuery);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const paginationButtons = [];
  for (let i = 1; i <= totalPages; i++) {
    paginationButtons.push(
      <li className={`page-item ${currentPage === i ? "active" : ""}`} key={i}>
        <button className="page-link" onClick={() => paginate(i)}>
          {i}
        </button>
      </li>
    );
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Movies Table</h1>

      <div className="mb-4 d-flex">
        <input
          type="text"
          className="form-control"
          placeholder="Search for movies..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button className="btn btn-primary ms-2" onClick={handleSearch}>
          Search
        </button>
      </div>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Title</th>
            <th>Year</th>
            <th>IMDB ID</th>
            <th>Type</th>
            <th>Poster</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((item, index) => (
              <tr key={index}>
                <td>{item.title}</td>
                <td>{item.year}</td>
                <td>{item.imdbID}</td>
                <td>{item.type}</td>
                <td>
                  <img
                    src={item.poster || "placeholder.jpg"}
                    alt={item.title}
                    style={{ width: "50px" }}
                  />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center">
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {totalPages > 0 && (
        <nav>
          <ul className="pagination justify-content-center">
            {paginationButtons}
          </ul>
        </nav>
      )}
    </div>
  );
}

export default Homepage;
