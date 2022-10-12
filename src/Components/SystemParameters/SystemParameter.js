import React, { useState } from "react";
import './SystemParameter.css';

export const SystemParameter = (props) => {


    const [addParameterData, setAddParameter] = useState(
        {
            name: '',
            salary: ''
        }
    )

    const handleUpdateParameter = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;

        const newParameter = { ...addParameterData };
        newParameter[fieldName] = fieldValue;
        setAddParameter(newParameter);
    }

    return (
        <tr>
            <td>
                <form key={props.parameter.ParameterId} className="SystemParameterRow">
                    <p>{props.parameter.ParameterName}</p>
                    <input type="number" name="salary" required="required" placeholder="0" defaultValue={props.parameter.ParameterValue} onChange={handleUpdateParameter} />
                </form>
            </td>
        </tr>
    )
}