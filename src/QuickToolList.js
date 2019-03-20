import React from "react";
import {
  FaEnvelope,
  FaHouseDamage,
  FaMap,
  FaQuestionCircle,
} from "react-icons/fa";
import styled from "react-emotion";

const QuickToolListStyle = styled("div")`
  display: flex;
  width: 7rem;
  margin-top: 0.25rem;
  justify-content: space-between;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.darkGray};
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
        <FaHouseDamage />
      </a>
      <a href="#">
        <FaMap />
      </a>
      <a href="#">
        <FaQuestionCircle />
      </a>
      <a href="#">
        <FaEnvelope />
      </a>
    </QuickToolListStyle>
  );
}

export default QuickToolList;
