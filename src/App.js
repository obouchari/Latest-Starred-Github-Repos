import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { fetchRepos, filterRepos } from "./Utilities/fetchRepos";
import Repos from "./Components/Repos";
import Loader from "./Components/Loader";
import {debounce} from "lodash-es";

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

const Container = styled.div`
  margin: 30px auto;
  width: 70%;
`;

function App() {
  const [page, setPage] = useState(1);
  const { loading, error, repos } = useFetch(page);

  window.onscroll = debounce(() => {
    if (loading || error) return;

    const scrollPos = window.innerHeight + document.documentElement.scrollTop;
    const height = document.documentElement.offsetHeight;
    if (scrollPos === height) {
      setPage(page => page + 1);
    }
  }, 200);

  return (
    <Container>
      <Repos repos={repos} />
      {loading && <Loader />}
    </Container>
  );
}

export default App;
