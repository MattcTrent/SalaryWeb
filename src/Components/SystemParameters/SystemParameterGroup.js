import React from "react";
import { SystemParameter } from './SystemParameter.js';

export const SystemParameterGroup = (props) => {

    return (
        <div className="ParameterGroup">
            <p className="SystemParameterTitle">{props.group}</p>

            <table key={props.group} className="ParameterTable">
                <thead>
                    <tr>
                        <td>
                                <p className="NameTag" ></p>
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
                    </tr>
                </thead>
                <tbody>
                    {props.parameters.map((parameter) =>
                        <SystemParameter key={parameter.Id} parameter={parameter} />
                    )}
                </tbody>
            </table>
        </div>
    )
}