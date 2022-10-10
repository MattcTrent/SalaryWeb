import React from "react";

export const DataRow = (props) => {

    const monthsinAYear = 12;
    const weeksInAYear = 52;
    const workingDaysInWeek = 5;
    const hoursWorkInDay = 7.5;
    
    const monthlyValue = props.rowValue/monthsinAYear;
    const weeklyValue = props.rowValue/weeksInAYear;
    const dailyValue = weeklyValue/workingDaysInWeek;
    const hourlyValue = dailyValue/hoursWorkInDay;

    return (
            <tr>
                <td>{props.rowName}</td>
                <td>{props.rowValue.toFixed(2)}</td>
                <td>{monthlyValue.toFixed(2)}</td>
                <td>{weeklyValue.toFixed(2)}</td>
                <td>{dailyValue.toFixed(2)}</td>
                <td>{hourlyValue.toFixed(2)}</td>
            </tr>
    )
}