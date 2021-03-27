import React from "react";
import { NavLink } from "react-router-dom";
import { FaMicroscope, FaClipboardList } from "react-icons/fa";

const Header = () => {
  return (
    <header>
      <nav>
        <NavLink to="/devices" activeClassName="active">
          <span className="navLogo">
            <FaMicroscope />
          </span>
          Devices
        </NavLink>
        <NavLink to="/sops" activeClassName="active">
          <span className="navLogo">
            <FaClipboardList />
          </span>
          SOPs
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
