import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./header/Header";
import { LayoutProvider } from "./layout-wapper/LayoutContext";
import { SideNavigation } from "./side-navigation/SideNavigation";

export const Layout = () => {
  return (
    <LayoutProvider>
      <div style={{ margin: 0, boxSizing: "border-box" }}>
        <Header />
        <SideNavigation />
        <Outlet />
      </div>
    </LayoutProvider>
  );
};
