import React from "react";
import styled, { keyframes } from "styled-components";

const Loading = styled.div`
  display: flex;
  position: relative;
  width: 80px;
  height: 80px;
  margin: 0 auto;
`;

const Ellipsis = styled.div`
  position: absolute;
  top: 30px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #9f7aea;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
`;

const moveEllipsisOne = keyframes`
0% {
  transform: scale(0);
}
100% {
  transform: scale(1);
}`;

const moveEllipsisTwo = keyframes`
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
`;

const moveEllipsisThree = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`;

const EllipsisOne = styled(Ellipsis)`
  left: 8px;
  animation: ${moveEllipsisOne} 0.6s infinite;
`;

const EllipsisTwo = styled(Ellipsis)`
  left: 8px;
  animation: ${moveEllipsisTwo} 0.6s infinite;
`;

const EllipsisThree = styled(Ellipsis)`
  left: 32px;
  animation: ${moveEllipsisTwo} 0.6s infinite;
`;

const EllipsisFour = styled(Ellipsis)`
  left: 56px;
  animation: ${moveEllipsisThree} 0.6s infinite;
`;

const Loader = () => {
  return (
    <Loading>
      <EllipsisOne />
      <EllipsisTwo />
      <EllipsisThree />
      <EllipsisFour />
    </Loading>
  );
};

export default Loader;
