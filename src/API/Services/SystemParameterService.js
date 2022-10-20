import { variables } from "../Variables.js"
import axios from 'axios';

export class SystemParameterService {
    
    static async getSystemParameters () {
      return await axios.get(variables.API_URL + "/SystemParameters").catch((error) => {
        console.log("Error: ", error)});
  };

  static async getSystemParameter (systemParameterId) {
    return await axios.get(variables.API_URL + "/SystemParameters/"+systemParameterId).catch((error) => {
      console.log("Error: ", error)});
};
}