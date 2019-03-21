import React, { useReducer } from "react";
import styled, { cx } from "react-emotion";
import {
  FaDotCircle,
  FaHome,
  FaListUl,
  FaToolbox,
  FaUsers,
} from "react-icons/fa";
import * as R from "ramda";
import { darken } from "polished";
import { bindActionCreators, initialState, reducer } from "./menuReducer";
import MenuItem from "./MenuItem";
import LogoIcon from "../LogoIcon";
import LogoFull from "../LogoFull";

const Nav = styled("nav")`
  background-color: ${({ theme }) => theme.darkGray};
  max-width: 62px;
  height: 100vh;
  position: fixed;
  z-index: 1;
  transition: max-width 0.2s;

  a {
    color: ${({ theme }) => theme.white};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    text-decoration: none;
  }

  .bottom {
    position: absolute;
    bottom: 5px;
    width: 100%;
  }

  .menu-list {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    position: relative;
    transition: all 0.2s;

    &:before {
      content: "";
      display: block;
      background: ${({ theme }) => theme.accentColor};
      position: absolute;
      top: 50%;
      left: 0;
      width: 2px;
      height: 0;
      transform: translateY(-50%);
      transition: all 0.2s;
      z-index: 1;
    }

    &.active,
    &:hover:not(.disabled) {
      background: ${({ theme }) => darken(0.1, theme.black)};

      &:before {
        height: 100%;
      }
    }

    &.active {
      background: ${({ theme }) => theme.logoBlack};
    }

    &.disabled {
      a {
        color: ${({ theme }) => darken(0.6, theme.white)};
        cursor: default;
      }
    }
  }

  .sub-menu li {
    background-color: ${({ theme }) => theme.black};

    &:hover {
      background-color: ${({ theme }) => theme.darkGray};
    }
  }

  .menu-child-indicator {
    display: none;
  }

  .menu-label {
    display: none;
    flex-grow: 1;
    margin-left: 0.5rem;
  }

  .menu-icon {
    height: 1em;
  }

  .logo {
    .logo-background {
      fill: ${({ theme }) => theme.darkGray};
    }
    .logo-lg-text-background {
      fill: ${({ theme }) => theme.logoBlack};
    }
    .logo-lg-img-background {
      fill: ${({ theme }) => theme.accentColor};
    }
    &:hover {
      background: ${({ theme }) => theme.accentColor};
      .logo-background {
        fill: ${({ theme }) => theme.accentColor};
      }
    }
    .logo-lg-img-foreground,
    .logo-lg-text,
    .logo-path {
      fill: ${({ theme }) => theme.white};
    }
  }

  &.expand {
    max-width: 306px;

    .menu-child-indicator,
    .menu-label {
      display: block;
    }

    .logo {
      background: ${({ theme }) => darken(0.2, theme.black)};
      .logo-background {
        fill: ${({ theme }) => darken(0.2, theme.black)};
      }
    }
  }
`;

const NavHeaderButton = styled("button")`
  padding: 0;
  margin: 0;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.black};
  background-color: ${({ theme }) => theme.darkGray};
  outline: transparent;
  height: 62px;
`;

function Menu() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { toggleSubMenu, toggleMainMenu } = bindActionCreators(dispatch);
  const { openSubMenus, expandMenu } = state;

  return (
    <Nav className={cx({ expand: expandMenu })}>
      <header>
        <NavHeaderButton onClick={toggleMainMenu}>
          {expandMenu ? <LogoFull /> : <LogoIcon />}
        </NavHeaderButton>
      </header>
      <ul className="menu-list">
        <MenuItem
          isActive={R.includes("home", openSubMenus)}
          toggleFn={() => toggleSubMenu("home")}
          Icon={FaHome}
          label={"Home"}
          subMenuItems={[
            {
              Icon: FaListUl,
              url: "foo",
              label: "Foo",
            },
            {
              Icon: FaListUl,
              url: "bar",
              label: "Bar",
            },
            {
              Icon: FaListUl,
              url: "baz",
              label: "Baz",
            },
          ]}
        />
        <MenuItem
          isActive={R.includes("list", openSubMenus)}
          toggleFn={() => toggleSubMenu("list")}
          Icon={FaDotCircle}
          label={"List"}
          disabled
        />

        <MenuItem
          isActive={R.includes("users", openSubMenus)}
          toggleFn={() => toggleSubMenu("users")}
          label={"Users"}
          Icon={FaUsers}
        />
      </ul>
      <ul className="menu-list bottom">
        <MenuItem
          isActive={R.includes("admin", openSubMenus)}
          toggleFn={toggleSubMenu}
          Icon={FaToolbox}
          label={"Admin"}
        />
      </ul>
    </Nav>
  );
}

export default Menu;
