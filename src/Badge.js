import React from "react";
import styled from "react-emotion";
import { lighten } from "polished";

const BadgeStyle = styled("div")`
  background-color: ${({ theme }) => theme.accentColor};
  border-radius: 50%;
  height: 1rem;
  width: 1rem;
  font-size: 0.7rem;
  color: ${({ theme }) => theme.white};
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => lighten(0.1, theme.accentColor)};
`;

function Badge({ children, className, ...props }) {
  return (
    <BadgeStyle {...props} className={`${className} badge`}>
      {children}
    </BadgeStyle>
  );
}

export default Badge;
