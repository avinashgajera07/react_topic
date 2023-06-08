import React, { useState, useEffect } from 'react';

const RepositoryList = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetchRepositories();
  }, []);

  const fetchRepositories = async () => {
    const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString();
    const apiUrl = `https://api.github.com/search/repositories?q=created:>${thirtyDaysAgo}&sort=stars&order=desc`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setRepos(data.items);
    } catch (error) {
      console.error('Error fetching repositories:', error);
    }
  };

  return (
    <div>
      <h1>Most Starred Repositories in the Last 30 Days</h1>
      <ul>
        {repos.map(repo => (
          <li key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noreferrer">
              {repo.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RepositoryList;
