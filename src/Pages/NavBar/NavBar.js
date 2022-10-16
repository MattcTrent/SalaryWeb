import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="NavBar">
      <ul className="NavBarRow">
        <li className="NavBarCell">
          <Link className="NavBarLink" to="/">Home</Link>
        </li>
        <li className="NavBarCell">
          <Link className="NavBarLink" to="/SalaryBreakdown">Salary Breakdown</Link>
        </li>
        <li className="NavBarCell">
          <Link className="NavBarLink" to="/SystemParameters">System Parameters</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;