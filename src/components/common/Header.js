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
          <span className="navTitle">Devices</span>
        </NavLink>
        <NavLink to="/sops" activeClassName="active">
          <span className="navLogo">
            <FaClipboardList />
          </span>
          <span className="navTitle">Sops</span>
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
