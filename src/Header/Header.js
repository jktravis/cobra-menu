import React from "react";
import styled from "react-emotion";
import IncidentHeaderTable from "../IncidentHeaderTable";
import faker from "faker";
import UserMenu from "../UserMenu";
import QuickToolList from "../QuickToolList";
import SearchBar from "../SearchBar";

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
          ["Type", "Incident"],
          ["Status", "Open"],
          ["Expired", `${faker.random.boolean()}`],
          ["Ticker", "N/A"]
        ]}
      />
      <IncidentHeaderTable
        data={[
          ["DataElement", faker.lorem.words()],
          ["Answer", "42"],
          ["Area", faker.name.jobArea()],
          ["DataElement", "N/A"]
        ]}
      />
      <QuickToolList/>
      <SearchBar/>
      <UserMenu/>
    </HeaderWrapper>
  );
}

export default Header;
