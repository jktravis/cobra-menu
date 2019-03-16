import React from "react";
import { FaHome, FaMap, FaSun } from "react-icons/fa";
import styled from "react-emotion";

const QuickToolListStyle = styled("div")`
  display: flex;
  width: 4rem;
  margin-top: .25rem;
  justify-content: space-between;
  align-self: flex-start;
  a {
    text-decoration: none;
  }
  a:visited {
    color: currentColor;
  }
`;

function QuickToolList(props) {
  return (
    <QuickToolListStyle>
      <a href="#">
        <FaHome/>
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
