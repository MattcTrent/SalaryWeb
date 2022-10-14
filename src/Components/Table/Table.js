import React from "react";
import './Table.css';
import { DataRow } from './DataRow.js';

export const SalaryTable = (props) => {
    return (
          <>
          <p className="TableTitle">{props.person.name}</p>
          <div className="OuterTable">  
          <table key={props.person.Id} className="SalaryTable">
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
              <DataRow rowName='Salary' rowValue={props.person.salary} />
              <DataRow rowName='Salary Post Salary Sacrifice' rowValue={props.person.salaryPSF} />
              <DataRow rowName='Pension' rowValue={props.person.pension} />
              <DataRow rowName='Tax Free' rowValue={props.person.taxFree} />
              <DataRow rowName='Taxable' rowValue={props.person.taxable} />
              <DataRow rowName='Tax' rowValue={props.person.tax} />
              <DataRow rowName='NI' rowValue={props.person.ni} />
              <DataRow rowName='Student Loan Threshold' rowValue={props.person.studentLoanThresh} />
              <DataRow rowName='Student Loan' rowValue={props.person.studentLoan} />
              <DataRow rowName='Salary Sacrifice Scheme' rowValue={props.person.salarySS} />
              <DataRow rowName='Take Home' rowValue={props.person.takeHome} />
              <DataRow rowName='After Rent and Outgoings' rowValue={props.person.postOutgoings} />
              </tbody>
          </table>
          </div>
          </>
    )
}