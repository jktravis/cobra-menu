import React from "react";
import styled from "react-emotion";
import faker from "faker";

const IncidentTitleStyle = styled("div")`
  font-size: 1.5rem;
  flex-basis: 300px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

function IncidentTitle() {
  const text = faker.lorem.sentence();
  return (
    <IncidentTitleStyle title={text}>
      {text}
    </IncidentTitleStyle>
  );
}

export default IncidentTitle;