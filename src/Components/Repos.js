import React from "react";
import RepoDetails from "./RepoDetails";


const Repos = ({ repos }) => {
    return repos.map(data => (
        <div key={data.id}>
            <RepoDetails {...data} />
        </div>
    ));
};

export default Repos;