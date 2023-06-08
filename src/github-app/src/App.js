import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [repos, setRepos] = useState([]);
  const [period, setPeriod] = useState("1w");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchRepos = async () => {
      setLoading(true);
      const date = calculateCreatedDate(period);
      const response = await axios.get(
        `https://api.github.com/search/repositories?q=created:>${date}&sort=stars&order=desc&page=${page}`
      );
      setRepos(response.data.items);
    };

    fetchRepos();
  }, [period]);

  const calculateCreatedDate = () => {
    const today = new Date();
    const createdDate = new Date(today);
    if (period === "1w") {
      createdDate.setDate(createdDate.getDate() - 7);
    } else if (period === "2w") {
      createdDate.setDate(createdDate.getDate() - 14);
    } else if (period === "1m") {
      createdDate.setMonth(createdDate.getMonth() - 1);
    }
    return createdDate.toISOString().split("T")[0];
  };

  const handleTimePeriodChange = (event) => {
    setPeriod(event.target.value);
    setPage(1);
    setRepos([]);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div>
      <h1>Most Starred GitHub Repositories</h1>
      <div>
        <h2>Time Period</h2>
        <select value={period} onChange={handleTimePeriodChange}>
          <option value="1w">Last 1 week</option>
          <option value="2w">Last 2 weeks</option>
          <option value="1m">Last 1 month</option>
        </select>
      </div>
      <div>
        <h2>Repository List</h2>
        {repos.map((repo) => (
          <div key={repo.id}>
            <div className="d-flex">
              <img
                src={repo.owner.avatar_url}
                alt={repo.owner.login}
                width="50"
                height="50"
              />
              Username: {repo.owner.login}{" "}
            </div>
            <div className="mx-5">

            <div>
              Repository name: <strong>{repo.name} </strong>{" "}
            </div>
            <div className="d-flex">
            <div>Number of stars: {repo.stargazers_count}</div>
            <div className="mx-3">Number of issues: {repo.open_issues_count}</div>
            </div>
            <div>Repository description: {repo.description}</div>
            <hr />
          </div>
          </div>

        ))}
        {loading && <div>Loading...</div>}
        {!loading && (
          <button onClick={handleLoadMore} disabled={loading}>
            Load More
          </button>
        )}
      </div>
    </div>
  );
};

export default App;
