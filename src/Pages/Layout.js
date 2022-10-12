import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./NavBar/NavBar.js";
import "./Layout.css"

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="MainContentDiv">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;