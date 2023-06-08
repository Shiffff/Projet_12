import React from "react";
import { Outlet } from "react-router-dom";
import Menu from "../Components/Menu/Menu";

const Layout = () => {
  return (
    <div>
      <Menu />
      <Outlet />
    </div>
  );
};

export default Layout;
