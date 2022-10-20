import { configureStore } from '@reduxjs/toolkit';
import { getSystemParameters, selectSystemParameter } from '../Reducers/SystemParameterReducer';

export const store = configureStore({
    reducer: {
        allSystemParameters: getSystemParameters,
        selectedSystemParameter: selectSystemParameter
    }
});

export default store;