import React, { useState } from "react";
import data from "./mock-TableData.json";
import { SalaryTable } from './Table.js';

export const TableList = () => {

    const [salaries] = useState(data);

    return (
      <div className="table-Containor">
        <h2 className="PageHeader">Salary Breakdown</h2>
        {salaries.map((salary) =>
              <SalaryTable key={salary.id} person={salary} />
        )}
      </div>
    )
}