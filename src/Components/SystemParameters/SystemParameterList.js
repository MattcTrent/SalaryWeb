import { SystemParameterBanner } from './SystemParameterBanner.js';
import { SystemParameter } from './SystemParameter.js';
import { SystemParameterHeader } from './SystemParameterHeader.js';
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import { useEffect } from 'react';
import { variables } from '../../API/Variables.js';
import { setSystemParameters } from '../../Redux/Actions/SystemParameterActions.js';


export const SystemParameterList = () => {

  const systemParameters = useSelector((state) => state.allSystemParameters.systemParameters);
  const dispatch = useDispatch();

  const fetchSystemParameters = async () => {
    const apiURL = variables.API_URL + "/SystemParameters";
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

      <div className="ParameterGroup">
        <SystemParameterBanner />
        <table className="ParameterTable">
          <thead className='ParameterTableHead'>
            <SystemParameterHeader />
          </thead>
          <tbody className='ParameterTableBody'>
            {systemParameters.map((parameter) =>
              <SystemParameter key={parameter.Id} parameter={parameter} />
            )}
          </tbody>
        </table>
      </div>
    </>
  )
}