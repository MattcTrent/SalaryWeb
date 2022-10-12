import React from "react";
import { TableList } from "./Components/Table/TableList.js";
import { SystemParameterList } from "./Components/SystemParameters/SystemParameterList.js";

const App = () => {
  return (
    <div>
      <div>
        <TableList></TableList>
      </div>
      <div>
        <SystemParameterList></SystemParameterList>
      </div>
    </div>
  )
}

export default App;
