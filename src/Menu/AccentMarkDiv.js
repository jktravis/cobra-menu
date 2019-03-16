import styled from "react-emotion";

const AccentMark = styled("div")`
  position: absolute;
  left: 0;
  height: 0;
  width: 2px;

  background: ${({ theme }) => theme.accentColor};

  transition: height 0.2s ease;

  &.expanded {
    height: 100%;
  }
`;
export default AccentMark;
