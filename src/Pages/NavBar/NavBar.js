import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="NavBar">
      <ul className="NavBarRow">
        <li className="NavBarCell">
          <Link to="/">Home</Link>
        </li>
        <li className="NavBarCell">
          <Link to="/SalaryBreakdown">SalaryBreakdown</Link>
        </li>
        <li className="NavBarCell">
          <Link to="/SystemParameters">SystemParameters</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;