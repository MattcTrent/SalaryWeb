import React, { useState } from "react";
import data from "./mock-ParameterData.json";
import { SystemParameterGroup } from './SystemParameterGroup.js';

export const SystemParameterList = () => {

  const [parameters] = useState(data);

  let uniqueGroups = [...new Set(parameters.map(item => item.ParameterGroup))]

  return (
    <div>
      <h2 className="PageHeader">System Parameters</h2>
      <div className="ParameterGroups">
        {uniqueGroups.map((groupName) =>
          <SystemParameterGroup group={groupName} parameters={parameters.filter(filterParameters => filterParameters.ParameterGroup === groupName)} />
        )}
      </div>
    </div>
  )
}