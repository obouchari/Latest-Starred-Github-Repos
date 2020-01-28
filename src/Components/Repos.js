import React from "react";

const Repos = ({ repos }) => {
    return repos.map(data => (
        <ul key={data.id}>
            <li>{data.name}</li>
        </ul>
    ));
};

export default Repos;