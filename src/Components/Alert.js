import React from "react";
import styled from "styled-components";

const AlertBox = styled.div`
  color: #c53030;
  border: 1px solid #fc8181;
  border-radius: 0.25rem;
  padding: 0.75rem 1rem;
  background-color: #fff5f5;
`;

const Alert = ({ message, type }) => {
  return (
    <AlertBox>
      <strong style={{ textTransform: "capitalize" }}>{type}! </strong>
      <span>{message}</span>
    </AlertBox>
  );
};

export default Alert;
