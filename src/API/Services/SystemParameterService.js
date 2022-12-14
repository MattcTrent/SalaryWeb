import { variables } from "../Variables.js"
import axios from 'axios';

export class SystemParameterService {

  static async getSystemParameters() {
    return await axios.get(variables.API_URL + "/SystemParameters").catch((error) => {
      console.log("Error: ", error)
    });
  };

  static async getSystemParameter(systemParameterId) {
    return await axios.get(variables.API_URL + "/SystemParameters/" + systemParameterId).catch((error) => {
      console.log("Error: ", error)
    });
  };

  static async createSystemParameter(systemParameter) {
    return await axios.post(variables.API_URL + "/SystemParameters", systemParameter).catch((error) => {
      console.log("Error: ", error)
    });
  };

  static async updateSystemParameter(systemParameterId, systemParameter) {
    return await axios.put(variables.API_URL + "/SystemParameters/" + systemParameterId, systemParameter).catch((error) => {
      console.log("Error: ", error)
    });
  };

  static async deleteSystemParameter(systemParameterId) {
    return await axios.delete(variables.API_URL + "/SystemParameters/" + systemParameterId).catch((error) => {
      console.log("Error: ", error)
    });
  };
}