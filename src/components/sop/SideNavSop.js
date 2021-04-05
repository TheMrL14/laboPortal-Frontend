import React from "react";
import { NavLink } from "react-router-dom";
import SideNav from "../common/SideNav";

const nav = [
  {
    id: "1",
    url: "./info",
    title: "Details",
    isVisable: true,
  },
  {
    id: "2",
    url: "./edit",
    title: "Edit",
    isVisable: true,
  },
];
const SideNavSop = () => <SideNav links={nav} />;

export default SideNavSop;
