import React from "react";
import "./NavBar.css";
import { useNavigate } from "react-router-dom";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

function Navbar() {
  const [value, setValue] = React.useState("/");
  let navigate = useNavigate();

  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
    navigate(newValue);
  };

  return (
    <>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab sx={{ width: 1, fontSize: 25}}  label="Home" value="/" />
        <Tab sx={{ width: 1, fontSize: 25}} label="Salary Breakdown" value="/SalaryBreakdown" />
        <Tab sx={{ width: 1, fontSize: 25}}  label="System Parameters" value="/SystemParameters" />
      </Tabs>
    </>
  );
}


export default Navbar;