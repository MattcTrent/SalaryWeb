import { configureStore } from '@reduxjs/toolkit';
import { systemParameterReducer } from '../Reducers/SystemParameterReducer';

export const store = configureStore({
    reducer: {
        allSystemParameters: systemParameterReducer
    }
});

export default store;