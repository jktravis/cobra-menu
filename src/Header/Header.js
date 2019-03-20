import React from "react";
import styled from "react-emotion";
import IncidentHeaderTable from "../IncidentHeaderTable";
import faker from "faker";
import { darken } from "polished";
import UserMenu from "../UserMenu";
import QuickToolList from "../QuickToolList";
import SearchBar from "../SearchBar";
import IncidentTitle from "../IncidentTitle";

const HeaderWrapper = styled("header")`
  background: ${({ theme }) => theme.white};
  border-bottom: 1px solid ${({ theme }) => darken(0.2, theme.white)};
  box-shadow: 0 2px 5px 0 ${({ theme }) => darken(0.1, theme.white)};
  position: fixed;
  width: 95vw;
  height: 62px;
  margin-left: 62px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .customer-logo-wrapper {
    padding: 0.5rem;

    .customer-logo {
      border-radius: 4px;
      transition: all 0.2s;
      cursor: pointer;
      &:hover {
        box-shadow: 0 1px 10px ${({ theme }) => theme.lightGray};
        transform: scale(1.007);
        z-index: 2;
      }
    }
  }
`;

function Header() {
  return (
    <HeaderWrapper>
      <div className="customer-logo-wrapper">
        <img
          src="https://source.unsplash.com/random/300x50"
          className="customer-logo"
        />
      </div>
      <IncidentHeaderTable
        data={[
          ["Position", faker.name.jobTitle()],
          ["Status", "Open"],
          ["Expired", `${faker.random.boolean()}`],
          ["Type", "Actual"],
        ]}
      />
      <IncidentTitle />
      <QuickToolList />
      <SearchBar />
      <UserMenu />
    </HeaderWrapper>
  );
}

export default Header;
