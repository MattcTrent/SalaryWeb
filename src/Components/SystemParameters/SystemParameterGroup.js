import React from "react";
import { SystemParameter } from './SystemParameter.js';

export const SystemParameterGroup = (props) => {
    return (
        <div>
            <p className="SystemParameterTitle">{props.group}</p>

            <table key={props.group} className="ParameterTable">
                <tbody>
                    {props.parameters.map((parameter) =>
                        <SystemParameter parameter={parameter} />
                    )}
                </tbody>
            </table>
        </div>
    )
}