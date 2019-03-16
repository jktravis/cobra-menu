import React from "react";
import { FaHouseDamage, FaMap, FaSun } from "react-icons/fa";
import styled from "react-emotion";

const QuickToolListStyle = styled("div")`
  display: flex;
  width: 4rem;
  margin-top: .25rem;
  justify-content: space-between;
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
        <FaSun/>
      </a>
    </QuickToolListStyle>
  );
}

export default QuickToolList;
