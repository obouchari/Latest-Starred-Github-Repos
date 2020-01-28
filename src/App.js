import React, { useState, useEffect } from "react";
import { fetchRepos, filterRepos } from "./Utilities/fetchRepos";
import Repos from "./Components/Repos";


function useFetch(page) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetchRepos(page)
        .then(data => setRepos(repos => repos.concat(filterRepos(data))))
        .catch(error => {
          if (error instanceof window.Response) {
            setError(`${error.status}: ${error.statusText}`);
          } else {
            setError(error.toString());
          }
        })
        .finally(() => setLoading(false));
  }, [page]);

  return {
    loading,
    error,
    repos
  };
}

function App() {
  const [page, setPage] = useState(1);
  const { loading, error, repos } = useFetch(page);
  return (
      <div>
          <Repos repos={repos} />
      </div>
  );
}

export default App;
