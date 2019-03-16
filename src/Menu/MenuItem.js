import React, { useState } from "react";
import AccentMarkDiv from "./AccentMarkDiv";

function MenuItem({ toggleFn, isExpanded, Icon, subMenuItems, disabled }) {
  const [isMouseOver, setIsMouseOver] = useState(false);
  return (
    <li
      onMouseOver={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}
    >
      <AccentMarkDiv className={!disabled && (isMouseOver || isExpanded) ? "expanded" : ""}/>
      <a href="#" onClick={() => toggleFn("home")} className={disabled ? "disabled" : ""}>
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
