import React from "react";
import { NavLink } from "react-router-dom";

const SideNavSop = () => {
  return (
    <aside>
      <NavLink to={"./info"} activeClassName="active" exact>
        Info
      </NavLink>
      <NavLink to={"./edit"} activeClassName="active" exact>
        Edit
      </NavLink>
    </aside>
  );
};

export default SideNavSop;
