import React, { useState } from "react";
import { nanoid } from 'nanoid';
import data from "./Components/mock-data.json";

const App = () => {

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
        <h1>Salary Breakdown</h1>
        <h3>Submit Salary</h3>
        <form onSubmit={handleAddSalarySubmit}>
          <input type="text" name="name" required="required" placeholder="Add Name..." onChange={handleAddSalary}/>
          <input type="number" name="salary" required="required" placeholder="0" onChange={handleAddSalary}/>
          <button type="submit"> Submit </button>
        </form>
          <table>
              <thead>
                  <tr>
                      <th></th>
                      <th>Yearly</th>
                      <th>Monthly</th>
                      <th>Weekly</th>
                      <th>Daily</th>
                      <th>Hourly</th>
                  </tr>
              </thead>
              <tbody>
                {salaries.map((salary) => 
                    <tr>
                    <td>{salary.name}</td>
                    <td>{salary.salary}</td>
                    <td>{(salary.salary/12).toFixed(2)}</td>
                    <td>{(salary.salary/52).toFixed(2)}</td>
                    <td>{(salary.salary/365).toFixed(2)}</td>
                    <td>{((salary.salary/365)/7.5).toFixed(2)}</td>
                </tr>
                )}
              </tbody>
          </table>
      </div>
  )
}

export default App;
