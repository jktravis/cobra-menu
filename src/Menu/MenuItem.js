import React from "react";
import { cx } from "react-emotion";
import hasLength from "../utilities/hasLength";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

function MenuItem({ toggleFn, isActive, Icon, subMenuItems, disabled, label }) {
  const cn = cx({
    disabled: disabled,
    active: isActive && hasLength(subMenuItems),
  });
  return (
    <li className={cn}>
      <a href="#" onClick={toggleFn}>
        <span className="menu-icon">
          <Icon />
        </span>
        <span className="menu-label">{label}</span>
        {hasLength(subMenuItems) && (
          <span className="menu-child-indicator">
            {isActive ? <FaCaretUp /> : <FaCaretDown />}
          </span>
        )}
      </a>
      {isActive && hasLength(subMenuItems) && (
        <ul className="menu-list sub-menu">
          {subMenuItems.map(({ Icon: SubIcon, url, label: subLabel }, idx) => (
            <li key={idx}>
              <a href={`#${url}`}>
                <span className="menu-icon">
                  <SubIcon />
                </span>
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
