import React from "react";
import './SystemParameter.css';
import { MdDelete } from "react-icons/md"
import { BiEdit } from "react-icons/bi"


export const SystemParameter = (props) => {
    return (
        <tr key={props.parameter.id}>
            <td className="editTag" >
                <button>
                    <BiEdit size={25} />
                </button>
            </td>
            <td >
                <p className="NameTag" >{props.parameter.group}</p>
            </td>
            <td >
                <p className="NameTag" >{props.parameter.name}</p>
            </td>
            <td>
                <p>{props.parameter.rate}</p>
            </td>
            <td>
                <p>{props.parameter.lowerThreshold}</p>
            </td>
            <td>
                <p>{props.parameter.upperThreshold}</p>
            </td>
            <td className="deleteTag">
                <button>
                    <MdDelete size={25} />
                </button>
            </td>
        </tr>
    )
}