import React from "react";
import styled from "react-emotion";
import IncidentHeaderTable from "../IncidentHeaderTable";
import faker from "faker";
import UserMenu from "../UserMenu";
import QuickToolList from "../QuickToolList";
import SearchBar from "../SearchBar";
import IncidentTitle from "../IncidentTitle";

const HeaderWrapper = styled("header")`
  background: #f7f7f7;
  border-bottom: 1px solid #cacaca;
  box-shadow: 0 2px 5px 0 #dcd8d8;
  position: fixed;
  width: 96vw;
  margin-left: 63px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

function Header() {
  return (
    <HeaderWrapper>
      <img src="http://via.placeholder.com/300x65" />
      <IncidentHeaderTable
        data={[
          ["Position", faker.name.jobTitle()],
          ["Status", "Open"],
          ["Expired", `${faker.random.boolean()}`],
          ["Type", "Actual"]
        ]}
      />
      <IncidentTitle/>
      <QuickToolList/>
      <SearchBar/>
      <UserMenu/>
    </HeaderWrapper>
  );
}

export default Header;
