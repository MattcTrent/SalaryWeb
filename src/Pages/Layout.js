import React from "react";
import {Outlet} from "react-router-dom";
import Navbar from "./NavBar/NavBar.js";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Layout;