import React, { useState } from "react";
import data from "./mock-data.json";
import './Table.css';

export const SalaryTable = () => {

    const [salaries, setSalaries] = useState(data);
    const [addSalaryData, setAddSalary] = useState (
      {
          name : '',
          salary : ''
      }
    )
  
    const handleAddSalary = (event) =>
    {
      event.preventDefault();
  
      const fieldName = event.target.getAttribute('name');
      const fieldValue = event.target.value;
  
      const newSalary = { ...addSalaryData};
      newSalary[fieldName] = fieldValue;
      setAddSalary(newSalary);
    }
  
    const handleAddSalarySubmit = (event) =>
    {
      event.preventDefault();
  
      const newSalary = {
        name : addSalaryData.name,
        salary: addSalaryData.salary,
      }
  
      const newSalaries = [...salaries, newSalary];
  
      setSalaries(newSalaries);
    }

    return (
      <div className="table-Containor">
        <h2>Submit Salary</h2>
        <form onSubmit={handleAddSalarySubmit}>
          <input type="text" name="name" required="required" placeholder="Add Name..." onChange={handleAddSalary}/>
          <input type="number" name="salary" required="required" placeholder="0" onChange={handleAddSalary}/>
          <button type="submit"> Submit </button>
        </form>
      </div>
    )
}