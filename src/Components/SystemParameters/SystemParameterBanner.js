import React from "react";
import { IoMdCreate } from "react-icons/io"
import { BiExport } from "react-icons/bi"

export const SystemParameterBanner = (props) => {

    return (
        <div className="ParametersBanner">
            <button className="ParametersBannerBtn">
                <IoMdCreate size={30} />
                <p>Add New</p>
            </button>
            <button className="ParametersBannerBtn">
                <BiExport size={30} />
                <p>Export</p>
            </button>
        </div>
    )
}

