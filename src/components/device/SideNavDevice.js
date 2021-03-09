import React from "react";
import "../../style/sidenav.css";
import { NavLink } from "react-router-dom";

const SideNavDevice = () => {
  const activeStyle = { color: "#FFFFFF" };
  return (
    <aside>
      <NavLink to={"./info"} activeStyle={activeStyle} exact>
        Info
      </NavLink>
      <NavLink to={"./edit"} activeStyle={activeStyle} exact>
        Edit
      </NavLink>

      <NavLink to={"./sop"} activeStyle={activeStyle}>
        SOP
      </NavLink>

      <NavLink to={"./discussion"} activeStyle={activeStyle}>
        Discussion
      </NavLink>

      <NavLink to={"./links"} activeStyle={activeStyle}>
        Links
      </NavLink>
    </aside>
  );
};

export default SideNavDevice;
