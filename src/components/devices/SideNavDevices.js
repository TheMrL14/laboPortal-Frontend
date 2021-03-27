import React from "react";
import { NavLink } from "react-router-dom";

const SideNavDevices = () => {
  return (
    <aside>
      <NavLink to={"/devices"} activeClassName="active" exact>
        All
      </NavLink>
      <NavLink to={"/devices/create"} activeClassName="active" exact>
        Create device
      </NavLink>
    </aside>
  );
};

export default SideNavDevices;
