import { SystemParameterGroup } from './SystemParameterGroup.js';
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import { useEffect } from 'react';
import { variables } from '../../API/Variables.js';
import { setSystemParameters } from '../../Redux/Actions/SystemParameterActions.js';


export const SystemParameterList = () => {

  const systemParameters = useSelector((state) => state.allSystemParameters.systemParameters);  
  const dispatch = useDispatch();

  const uniqueGroups = ([...new Set(systemParameters.map(item => item.group))]);

  const fetchSystemParameters= async () => {
    const apiURL = variables.API_URL+"/SystemParameters";
    const response = await axios.get(apiURL).catch((error) => {
      console.log("Error", error)
    });

    dispatch(setSystemParameters(response.data));
  };

  useEffect(() => {
    fetchSystemParameters();
  });

  return (
    <>

      <h2 className="PageHeader">System Parameters</h2>
      <div className="ParameterGroups">
        {uniqueGroups.map((groupName) =>
          <SystemParameterGroup key={groupName} group={groupName} parameters={systemParameters.filter(filterParameters => filterParameters.group === groupName)} />
        )}
      </div>
    </>
  )
}