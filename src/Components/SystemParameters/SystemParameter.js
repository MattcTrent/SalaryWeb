import React from "react";
import './SystemParameter.css';

export const SystemParameter = (props) => {
    return (
        <tr>
            <td key={props.parameter.id} className="SystemParameterRow">
                <p className="NameTag" >{props.parameter.name}</p>
            </td>
            <td>
                <input type="number" name="Rate" required="required" placeholder="0" defaultValue={props.parameter.rate} />
            </td>
            <td>
                <input type="number" name="Lower Threshold" placeholder="0" defaultValue={props.parameter.lowerThreshold} />
            </td>
            <td>
                <input type="number" name="UpperThreshold" placeholder="0" defaultValue={props.parameter.upperThreshold} />
            </td>
        </tr>
    )
}