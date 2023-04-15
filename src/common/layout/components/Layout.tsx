import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./header/Header";
import { SideNavigation } from "./side-navigation/SideNavigation";

export const Layout = () => {
  return (
    <div style={{ margin: 0 , }}>
      <Header />
      <SideNavigation />
      <Outlet />
    </div>
  );
};
