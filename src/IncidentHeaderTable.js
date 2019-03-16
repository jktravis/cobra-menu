import React from "react";
import styled from "react-emotion";

const HeaderTableWrapper = styled("div")`
  font-size: 0.8rem;
  display: flex;
  flex-direction: column;
  height: 65px;
  margin-left: .5rem;
  margin-right: .5rem;
`;

function IncidentHeaderTable({ data }) {
  console.log(data);
  return (
    <HeaderTableWrapper>
      {data.map(([a, b]) => (
        <div>
          <strong>{a}: </strong>
          <span>{b}</span>
        </div>
      ))}
    </HeaderTableWrapper>
  );
}

export default IncidentHeaderTable;
