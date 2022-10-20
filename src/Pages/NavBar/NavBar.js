import React from "react";
import "./NavBar.css";
import { useNavigate, useLocation } from "react-router-dom";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

function Navbar() {
  const [value, setValue] = React.useState(useLocation().pathname);
  let navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    navigate(newValue);
    console.log()
  };

  return (
    <>
      <Tabs sx={{ marginBottom: 5}} value={value} onChange={handleChange} centered>
        <Tab sx={{ width: 1, fontSize: 25 }} key="Home" label="Home" value="/" />
        <Tab sx={{ width: 1, fontSize: 25}} key="SalaryBreakdown" label="Salary Breakdown" value="/SalaryBreakdown" />
        <Tab sx={{ width: 1, fontSize: 25}} key="SystemParameters" label="System Parameters" value="/SystemParameters" />
      </Tabs>
    </>
  );
}


export default Navbar;