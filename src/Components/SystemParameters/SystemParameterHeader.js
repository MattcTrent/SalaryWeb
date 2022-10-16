import React from "react";
import './SystemParameter.css';

export const SystemParameterHeader = (props) => {
    return (
        <tr>
            <td>
                <p className="editTag" ></p>
            </td>
            <td>
                <p className="NameTag" >Group</p>
            </td>
            <td>
                <p className="NameTag" >Name</p>
            </td>
            <td>
                <p>Rate</p>
            </td>
            <td>
                <p>Lower Threshold</p>
            </td>
            <td>
                <p>Upper Threshold</p>
            </td>
            <td>
                <p className="deleteTag" ></p>
            </td>
        </tr>
    )
}