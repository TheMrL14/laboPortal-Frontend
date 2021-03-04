import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = { color: "#F15B2A" };
  return (
    <header>
      <nav>
        <NavLink to="/" activeStyle={activeStyle} exact>
          Home
        </NavLink>
        {" | "}
        <NavLink to="/devices" activeStyle={activeStyle}>
          Devices
        </NavLink>
        {" | "}
        <NavLink to="/about" activeStyle={activeStyle}>
          About
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
