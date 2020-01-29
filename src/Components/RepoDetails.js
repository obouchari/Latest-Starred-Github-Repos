import React, { Fragment } from "react";
import styled from "styled-components";
import { parseISO, formatDistance } from "date-fns";

const Avatar = styled.img`
  height: 100%;
  width: 64px;
  border-radius: 32px;
  border: 3px solid #eee;
`;

const Details = styled.div`
  margin-left: 20px;
`;

const Title = styled.h3`
  margin: 0 0 5px 0;
  -ms-word-break: break-all;
  word-break: break-all;
  word-break: break-word;
`;

const Description = styled.p`
  color: #909192;
  margin: 0 0 20px 0;
  -ms-word-break: break-all;
  word-break: break-all;
  word-break: break-word;
`;

const Stats = styled.div`
  display: flex;
`;

const Tag = styled.div`
  background-color: #eff3f6;
  padding: 3px 10px;
  border-radius: 0.25em;
  border: 1px solid rgba(27, 31, 35, 0.2);
  font-size: 0.75em;
  font-weight: bold;
  white-space: nowrap;
  margin-right: 10px;
`;

const Link = styled.a`
  color: inherit;
  text-decoration: none;
  &:hover {
    color: #885be5;
  }
`;

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
      <Avatar src={avatar} alt={description} />
      <Details>
        <Title>
          <Link href={repo_url} target="_blank">
            {name}
          </Link>
        </Title>
        <Description>{description || "No description available"}.</Description>
        <Stats>
          <Tag>Stars: {stars}</Tag>
          <Tag>Issues: {issues}</Tag>
          <div>
            Submitted {formatDistance(parseISO(created_at), new Date())} ago by{" "}
            <strong>
              <Link href={owner_url} target="_blank">
                {owner}
              </Link>
            </strong>
          </div>
        </Stats>
      </Details>
    </Fragment>
  );
};

export default RepoDetails;
