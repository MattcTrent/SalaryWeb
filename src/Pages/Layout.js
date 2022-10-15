import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./NavBar/NavBar.js";
import "./Layout.css"
import store from "../Redux/Store/Store.js";
import { Provider } from 'react-redux';

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="MainContentDiv">
        
      <Provider store={store}>
        <Outlet />
        </Provider>
      </div>
    </>
  );
};

export default Layout;