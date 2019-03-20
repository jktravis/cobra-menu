import React from "react";
import { cx } from "react-emotion";

function MenuItem({ toggleFn, isExpanded, Icon, subMenuItems, disabled }) {
  const cn = cx({
    disabled: disabled,
    active: isExpanded
  });
  return (
    <li
      className={cn}
    >
      <a href="#" onClick={() => toggleFn("home")}>
        <Icon/>
      </a>
      {isExpanded && (
        <ul className="menu-list sub-menu">
          {subMenuItems.map(({ Icon: SubIcon }, idx) => (
            <li key={idx}>
              <a href="#">
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
