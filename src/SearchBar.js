import React from "react";
import styled from "react-emotion";
import { FaSearch } from "react-icons/fa";

const SearchBarStyle = styled("div")`
  border-radius: 20px;
  background-color: ${({ theme }) => theme.lightGray};
  padding: 0.5rem;
  color: ${({ theme }) => theme.white};

  input {
    width: 150px;
    height: 20px;
    background-color: ${({ theme }) => theme.lightGray};
    border: none;
    outline: none;
    color: ${({ theme }) => theme.white};
    font-size: 1.1rem;
    transition: width 0.4s ease;
  }

  input::placeholder {
    padding-top: 0.25rem;
    font-size: 1rem;
    color: ${({ theme }) => theme.white};
  }
  input:focus {
    width: 200px;
  }

  .search-bar__wrapper {
    display: flex;
    align-items: center;
  }

  svg {
    margin-left: 8px;
  }
`;

function SearchBar() {
  return (
    <SearchBarStyle>
      <div className="search-bar__wrapper">
        <FaSearch />
        <input type="text" placeholder="Search" />
      </div>
    </SearchBarStyle>
  );
}

export default SearchBar;
