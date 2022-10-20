import { ActionTypes } from "../Constants/ActionTypes"

export const getSystemParameters = (systemParameters) => {
    return {
        type : ActionTypes.GET_SYSTEM_PARAMETERS,
        payload: systemParameters
    }
}

export const selectSystemParameter = (systemParameter) => {
    return {
        type : ActionTypes.SELECT_SYSTEM_PARAMETER,
        payload: systemParameter
    }
}

export const createSystemParameter = (systemParameter) => {
    return {
        type : ActionTypes.CREATE_SYSTEM_PARAMETER,
        payload: systemParameter
    }
}

export const updateSystemParameter = (systemParameter) => {
    return {
        type : ActionTypes.UPDATE_SYSTEM_PARAMETER,
        payload: systemParameter
    }
}

export const deleteSystemParameter = (systemParameter) => {
    return {
        type : ActionTypes.DELETE_SYSTEM_PARAMETER,
        payload: systemParameter
    }
}