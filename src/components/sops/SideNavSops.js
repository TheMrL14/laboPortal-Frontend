import React from "react";
import SideNav from "../common/SideNav";

const nav = [
  {
    id: "1",
    url: "/sops",
    title: "All Sops",
    isVisable: true,
  },
  {
    id: "2",
    url: "/sops/create",
    title: "Create Sop",
    isVisable: true,
  },
];
const SideNavSops = () => <SideNav links={nav} />;

export default SideNavSops;
