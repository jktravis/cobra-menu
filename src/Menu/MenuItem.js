import React from "react";
import { cx } from "react-emotion";
import hasLength from "../utilities/hasLength";

function MenuItem({
  toggleFn,
  isExpanded,
  Icon,
  subMenuItems,
  disabled,
  label,
}) {
  const cn = cx({
    disabled: disabled,
    active: isExpanded && hasLength(subMenuItems),
  });
  return (
    <li className={cn}>
      <a href="#" onClick={toggleFn}>
        <span className="menu-icon">
          <Icon />
        </span>{" "}
        <span className="menu-label">{label}</span>
      </a>
      {isExpanded && hasLength(subMenuItems) && (
        <ul className="menu-list sub-menu">
          {subMenuItems.map(({ Icon: SubIcon, url, subLabel }, idx) => (
            <li key={idx}>
              <a href={`#${url}`}>
                <span className="menu-icon">
                  <SubIcon />
                </span>{" "}
                <span className="menu-label">{subLabel}</span>
              </a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

export default MenuItem;
