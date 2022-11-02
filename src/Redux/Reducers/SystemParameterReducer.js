import { ActionTypes } from "../Constants/ActionTypes";

const initialState = {
    systemParameters: []
}

export const getSystemParameters = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.GET_SYSTEM_PARAMETERS:
            return { ...state, systemParameters: payload };
        default:
            return state;
    }
}

export const selectSystemParameter = (state = {}, { type, payload }) => {
    switch (type) {
        case ActionTypes.SELECT_SYSTEM_PARAMETER:
            return { ...state, ...payload };
        case ActionTypes.UPDATE_SELECTED_SYSTEM_PARAMETER:
            return { payload };
        case ActionTypes.REMOVE_SELECTED_SYSTEM_PARAMETER:
            return {};
        default:
            return state;
    }
}