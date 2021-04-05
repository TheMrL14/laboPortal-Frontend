import React from "react";
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
  {
    id: "3",
    url: "./sop",
    title: "SOP",
    isVisable: true,
  },
  {
    id: "4",
    url: "./discussion",
    title: " Discussion",
    isVisable: false,
  },
  {
    id: "5",
    url: "./code",
    title: " Generate QR code",
    isVisable: true,
  },
];
const SideNavDevice = () => <SideNav links={nav} />;

export default SideNavDevice;
