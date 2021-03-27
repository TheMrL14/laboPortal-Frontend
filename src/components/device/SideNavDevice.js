import React from "react";

import { NavLink } from "react-router-dom";

const SideNavDevice = () => {
  return (
    <aside>
      <NavLink to={"./info"} activeClassName="active" exact>
        Info
      </NavLink>
      <NavLink to={"./edit"} activeClassName="active" exact>
        Edit
      </NavLink>

      <NavLink to={"./sop"} activeClassName="active">
        SOP
      </NavLink>

      <NavLink to={"./discussion"} activeClassName="active">
        Discussion
      </NavLink>

      <NavLink to={"./code"} activeClassName="active">
        Generate QR code
      </NavLink>

      <NavLink to={"./links"} activeClassName="active">
        Links
      </NavLink>
    </aside>
  );
};

export default SideNavDevice;
