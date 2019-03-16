import React from "react";
import styled from "react-emotion";

const UserMenuStyle = styled("div")`
  

  img {
    border-radius: 50%;
    margin-right: 1rem;
  }
`;

function UserMenu(props) {
  return (
    <UserMenuStyle>
      <img src="https://www.fillmurray.com/40/40"/>
    </UserMenuStyle>
  );
}

export default UserMenu;