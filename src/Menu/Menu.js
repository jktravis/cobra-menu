import React, { useReducer } from "react";
import styled from "react-emotion";
import {
  FaDotCircle,
  FaHome,
  FaListUl,
  FaToolbox,
  FaUsers
} from "react-icons/fa";
import * as R from "ramda";
import { darken } from "polished";
import { bindActionCreators, initialState, reducer } from "./menuReducer";
import MenuItem from "./MenuItem";

const Nav = styled("nav")`
  background-color: ${({ theme }) => theme.darkGray};
  max-width: 62px;
  height: 100vh;
  position: fixed;

  a {
    color: ${({ theme }) => theme.white};
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }

  .bottom {
    position: absolute;
    bottom: 5px;

    a {
      padding: 0.5rem 1.5rem;
    }
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
      height: 0%;
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
      background: ${({ theme }) => darken(0.1, theme.black)};
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
`;

const NavHeaderButton = styled("button")`
  padding: 0;
  margin: 0;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.black};
  background-color: ${({ theme }) => theme.darkGray};
  outline: transparent;
`;

const LogoStyle = styled("svg")`
  .logo-background {
    fill: ${({ theme }) => theme.darkGray};
  }
  .logo-path {
    fill: ${({ theme }) => theme.white};
  }
`;

function Menu() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { toggleSubMenu } = bindActionCreators(dispatch);
  const { openSubMenus } = state;
  console.log(openSubMenus);

  return (
    <Nav>
      <header>
        <NavHeaderButton>
          <LogoStyle
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1023 1023"
            width="100%"
            height="100%"
          >
            <rect width="1023" height="1023" className="logo-background" />
            <path
              d="M 801.874 1023 L 735.679 1023 L 743.355 1007.847 C 759.405 975.945 773.063 938.86 780.64 906.559 C 781.936 900.677 783.332 895.095 783.631 894.098 C 784.129 892.503 786.721 892.403 819.52 892.403 C 854.711 892.403 854.811 892.403 854.811 894.496 C 854.811 899.78 841.951 940.355 834.374 959.197 C 827.097 977.141 809.65 1011.934 803.769 1020.308 L 801.874 1023 L 801.874 1023 L 801.874 1023 Z M 705.783 1023 L 606.776 1023 L 606.079 1015.722 C 604.483 999.473 600.396 985.516 592.321 969.166 C 563.011 910.048 487.345 842.856 370.306 772.373 C 332.622 749.544 304.708 729.805 281.58 709.467 C 270.215 699.398 247.385 676.469 238.612 666.101 C 195.545 615.457 169.725 556.938 161.45 490.643 C 159.257 473.097 158.36 433.618 159.855 416.372 C 165.937 346.487 189.763 284.08 230.138 232.938 C 234.525 227.455 244.793 216.189 253.068 208.015 C 278.19 182.992 299.225 168.237 334.018 151.19 C 375.091 131.052 393.036 125.37 430.819 120.684 C 452.752 117.992 490.336 117.095 514.262 118.69 C 552.943 121.282 597.505 131.85 634.391 147.103 C 662.604 158.767 701.484 180.3 724.214 196.849 C 745.648 212.501 767.58 235.629 773.861 249.088 C 780.141 262.546 775.655 276.503 763.094 282.584 L 758.608 284.778 L 656.922 285.376 C 568.495 285.874 553.939 286.173 545.466 287.569 C 533.502 289.563 525.128 291.756 517.352 294.747 C 514.062 295.943 506.486 297.738 500.604 298.635 C 485.251 301.028 471.294 305.414 458.035 311.894 C 437.598 322.063 426.832 335.621 425.436 353.067 C 424.14 369.815 432.215 387.062 453.649 412.882 C 476.777 440.896 502.099 461.333 560.12 499.116 C 592.421 520.251 620.434 539.99 639.476 555.044 C 716.338 616.155 756.813 675.871 767.68 744.36 C 769.873 758.317 770.571 792.112 769.175 810.256 C 767.68 827.802 763.692 860.501 761.499 872.464 C 752.826 920.117 732.189 977.241 710.157 1015.224 C 707.964 1018.813 706.303 1022.331 706.269 1022.402 C 706.148 1022.656 705.953 1022.862 705.783 1023 L 705.783 1023 Z M 492.629 329.739 C 491.931 333.627 494.423 344.095 497.414 350.176 C 507.184 369.516 530.312 390.053 563.709 408.895 C 584.047 420.359 600.197 429.83 602.091 431.226 C 603.885 432.622 599.499 432.721 557.528 432.821 L 510.872 432.821 L 502.698 425.543 C 474.186 400.521 451.057 369.317 451.057 356.058 C 451.057 346.587 461.724 337.316 480.267 330.537 C 491.831 326.349 493.326 326.25 492.629 329.739 L 492.629 329.739 L 492.629 329.739 L 492.629 329.739 Z M 644.46 460.436 C 649.844 464.124 672.673 482.667 686.331 494.531 C 709.659 514.868 766.185 571.493 767.879 576.478 C 768.079 576.976 755.817 577.375 736.476 577.375 L 704.774 577.375 L 692.811 566.309 C 662.006 537.697 627.512 511.678 577.168 478.979 C 564.607 470.804 552.444 462.928 550.251 461.433 L 546.263 458.741 L 594.115 458.741 C 637.581 458.741 642.267 458.94 644.46 460.436 L 644.46 460.436 L 644.46 460.436 L 644.46 460.436 Z M 793.7 608.479 C 808.055 627.52 824.305 654.338 834.474 675.672 C 840.655 688.931 851.82 717.443 851.82 720.434 C 851.82 721.73 848.132 721.929 820.916 721.929 L 790.111 721.929 L 789.014 717.642 C 779.045 680.058 760.402 643.471 734.682 611.27 L 728.202 603.295 L 789.812 603.295 L 793.7 608.479 L 793.7 608.479 L 793.7 608.479 L 793.7 608.479 Z M 859.198 749.544 C 860.892 755.426 863.086 775.962 863.684 792.711 C 864.581 814.743 862.288 859.305 860.095 865.187 C 859.696 866.184 852.917 866.483 824.305 866.483 C 804.865 866.483 789.014 866.184 789.014 865.685 C 789.014 865.287 789.911 858.208 790.908 850.034 C 794.796 820.026 795.494 809.957 795.494 781.744 C 795.494 766.093 795.095 752.136 794.697 750.541 L 793.999 747.849 L 826.299 747.849 C 856.307 747.849 858.699 747.949 859.198 749.544 L 859.198 749.544 L 859.198 749.544 Z M 523.832 167.141 C 510.075 168.636 488.94 172.524 488.94 173.621 C 488.94 174.019 496.616 177.608 505.888 181.496 C 559.422 204.226 597.804 215.492 621.531 215.691 C 634.591 215.791 639.775 214.395 644.66 209.51 C 648.448 205.722 648.946 204.127 648.547 196.051 C 648.049 188.375 646.753 186.581 637.98 182.493 C 620.733 174.418 599.798 168.835 578.763 166.642 C 565.304 165.346 538.288 165.546 523.832 167.141 Z"
              fillRule="evenodd"
              className="logo-path"
            />
          </LogoStyle>
        </NavHeaderButton>
      </header>
      <ul className="menu-list">
        <MenuItem
          isExpanded={R.includes("home", openSubMenus)}
          toggleFn={() => toggleSubMenu("home")}
          Icon={FaHome}
          subMenuItems={[
            {
              Icon: FaListUl,
              url: "foo"
            },
            {
              Icon: FaListUl,
              url: "bar"
            },
            {
              Icon: FaListUl,
              url: "baz"
            }
          ]}
        />
        <MenuItem
          isExpanded={R.includes("list", openSubMenus)}
          toggleFn={() => toggleSubMenu("list")}
          Icon={FaDotCircle}
          disabled
        />

        <MenuItem
          isExpanded={R.includes("users", openSubMenus)}
          toggleFn={() => toggleSubMenu("users")}
          Icon={FaUsers}
        />
      </ul>
      <ul className="menu-list bottom">
        <MenuItem
          isExpanded={R.includes("users", openSubMenus)}
          toggleFn={toggleSubMenu}
          Icon={FaToolbox}
        />
      </ul>
    </Nav>
  );
}

export default Menu;
