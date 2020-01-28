import React, { Fragment } from "react";

const RepoDetails = data => {
    const {
        avatar,
        description,
        name,
        stars,
        issues,
        owner,
        created_at,
        owner_url,
        repo_url
    } = data;
    return (
        <Fragment>
            <img src={avatar} alt={description} />
            <div>
                <h1>
                    <a href={repo_url} target="_blank">
                        {name}
                    </a>
                </h1>
                <p>{description || "No description available"}.</p>
                <div>
                    <div>Stars: {stars}</div>
                    <div>Issues: {issues}</div>
                    <div>
                        Submitted {created_at}
                        <strong>
                            <a href={owner_url} target="_blank">
                                {owner}
                            </a>
                        </strong>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default RepoDetails;
