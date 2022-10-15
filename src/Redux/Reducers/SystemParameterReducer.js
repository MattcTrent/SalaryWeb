import { ActionTypes } from "../Constants/ActionTypes";

const initialState = {
    systemParameters: []
}

export const systemParameterReducer = (state=initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_SYSTEM_PARAMETERS:
            return { ...state, systemParameters: payload };
        default:
            return state;
    }
}