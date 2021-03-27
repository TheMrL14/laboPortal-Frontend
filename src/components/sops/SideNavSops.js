import React from "react";
import { NavLink } from "react-router-dom";

const SideNavSops = () => {
  return (
    <aside>
      <NavLink to={"/sops"} activeClassName="active" exact>
        All Sops
      </NavLink>
      <NavLink to={"/sops/create"} activeClassName="active" exact>
        Create Sop
      </NavLink>
    </aside>
  );
};

export default SideNavSops;
