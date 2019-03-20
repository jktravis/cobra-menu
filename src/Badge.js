import React from "react";
import styled from "react-emotion";
import { lighten } from "polished";

const BadgeStyle = styled("div")`
  background-color: ${({ theme }) => theme.accentColor};
  border-radius: 50%;
  height: 1rem;
  min-width: 1rem;
  font-size: 0.7rem;
  color: ${({ theme }) => theme.white};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.05rem;
  border: 1px solid ${({ theme }) => lighten(0.1, theme.accentColor)};
`;

const BadgeWrapper = styled("span")`
  position: relative;

  .badge {
    position: absolute;
    top: -10px;
    left: -10px;
    //transform: translate(-7px, -7px);
    //transform-origin: bottom right;
  }
`;

function Badge({ children, className, value, ...props }) {
  return (
    <BadgeWrapper>
      <BadgeStyle {...props} className={`${className} badge`}>
        {value}
      </BadgeStyle>
      {children}
    </BadgeWrapper>
  );
}

export default Badge;
