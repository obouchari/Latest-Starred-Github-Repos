import React from "react";
import RepoDetails from "./RepoDetails";
import styled from "styled-components";

const Repo = styled.div`
  display: flex;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  border-radius: 0.25rem;
  background-color: #fff;
`;

const Repos = ({ repos }) => {
    return repos.map(data => (
        <Repo key={data.id}>
            <RepoDetails {...data} />
        </Repo>
    ));
};

export default Repos;