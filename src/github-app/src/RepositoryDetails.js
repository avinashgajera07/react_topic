import React, { useState, useEffect } from "react";

const RepositoryDetails = ({ repoName }) => {
  const [metrics, setMetrics] = useState([]);

  useEffect(() => {
    if (repoName) {
      fetchMetrics();
    }
  }, [repoName]);

  const fetchMetrics = async () => {
    const apiUrl = `https://api.github.com/repos/${repoName}/stats/commit_activity`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setMetrics(data);
    } catch (error) {
      console.error("Error fetching repository metrics:", error);
    }
  };

  return (
    <div>
      <h2>Repository Details: {repoName}</h2>
      {metrics.length > 0 ? (
        <p>
          Display the time series graph here using a chart library of your
          choice.
        </p>
      ) : (
        <p>Loading metrics...</p>
      )}
    </div>
  );
};

export default RepositoryDetails;
