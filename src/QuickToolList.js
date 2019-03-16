import React from "react";
import { FaHouseDamage, FaMap, FaQuestionCircle } from "react-icons/fa";
import styled from "react-emotion";

const QuickToolListStyle = styled("div")`
  display: flex;
  width: 5rem;
  margin-top: .25rem;
  justify-content: space-between;
  font-size: 1.2rem;
  a {
    text-decoration: none;
  }
  a:visited {
    color: currentColor;
  }
`;

function QuickToolList() {
  return (
    <QuickToolListStyle>
      <a href="#">
        <FaHouseDamage/>
      </a>
      <a href="#">
        <FaMap/>
      </a>
      <a href="#">
        <FaQuestionCircle/>
      </a>
    </QuickToolListStyle>
  );
}

export default QuickToolList;
