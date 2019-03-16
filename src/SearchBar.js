import React from "react";
import styled from "react-emotion";
import { FaSearch } from "react-icons/fa";

const bgColor = "#9f9d9d";
const textColor = "#f7f7f7";
const SearchBarStyle = styled("div")`
  border-radius: 20px;
  background-color: ${bgColor};
  padding: 0.5rem;
  color: ${textColor};

  input {
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 8px;
    width: 150px;
    height: 20px;
    background-color: ${bgColor};
    border: none;
    outline: none;
    color: ${textColor};
    font-size: 1.1rem;
    transition: width 0.4s ease;
  }

  input::placeholder {
    padding-top: 0.25rem;
    font-size: 1rem;
    color: ${textColor};
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
        <FaSearch/>
        <input type="search" placeholder="Search"/>
      </div>
    </SearchBarStyle>
  );
}

export default SearchBar;
