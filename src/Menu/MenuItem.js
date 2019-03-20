import React from "react";
import { cx } from "react-emotion";
import hasLength from "../utilities/hasLength";

function MenuItem({ toggleFn, isExpanded, Icon, subMenuItems, disabled }) {
  const cn = cx({
    disabled: disabled,
    active: isExpanded && hasLength(subMenuItems)
  });
  return (
    <li className={cn}>
      <a href="#" onClick={toggleFn}>
        <Icon/>
      </a>
      {isExpanded && hasLength(subMenuItems) && (
        <ul className="menu-list sub-menu">
          {subMenuItems.map(({ Icon: SubIcon, url }, idx) => (
            <li key={idx}>
              <a href={`#${url}`}>
                <SubIcon/>
              </a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

export default MenuItem;
