import React from "react";
import SideNav from "../common/SideNav";

const nav = [
  {
    id: "1",
    url: "/devices",
    title: "All Devices",
    isVisable: true,
  },
  {
    id: "2",
    url: "/devices/create",
    title: "Create Device",
    isVisable: true,
  },
];

const SideNavDevices = () => {
  return <SideNav links={nav} />;
};

export default SideNavDevices;
