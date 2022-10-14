import React, { useState } from "react";
import { SystemParameterGroup } from './SystemParameterGroup.js';
import { SystemParameterService } from "../../API/Services/SystemParameterService.js";
import { useEffect } from "react";


export const SystemParameterList = () => {

  const [systemParameters, setSystemParameters] = useState([])
  const [uniqueGroups, setuniqueGroups] = useState([])


  const refreshSystemParameters = () => {
    SystemParameterService.getSystemParameters().then((response) => {
      if (response.data) {
        setSystemParameters(response.data)
      }
    });
    if (systemParameters != null)
    {
    setuniqueGroups([...new Set(systemParameters.map(item => item.ParameterGroup))])
    }
  }

  useEffect(() => {
    refreshSystemParameters();
  });


  return (
    <>
      <h2 className="PageHeader">System Parameters</h2>
      <div className="ParameterGroups">
        
      {console.log("SP"+systemParameters)}
        {console.log(uniqueGroups)}
        {uniqueGroups.map((groupName) =>
          <SystemParameterGroup group={groupName} parameters={systemParameters.filter(filterParameters => filterParameters.ParameterGroup === groupName)} />
        )}
      </div>
    </>
  )
}