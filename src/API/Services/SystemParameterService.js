import { variables } from "../Variables.js"

export class SystemParameterService {
    
    static getSystemParameter() {
    return fetch(variables.API_URL + "/SystemParameters")
      .then(response => response.json());
  };
}