import React from "react";
import styled from "react-emotion";

const IncidentTitleStyle = styled("div")`
  font-size: 1.5rem;
`;

function IncidentTitle(props) {
  return (
    <IncidentTitleStyle>
      A really bad thing happened
    </IncidentTitleStyle>
  );
}

export default IncidentTitle;