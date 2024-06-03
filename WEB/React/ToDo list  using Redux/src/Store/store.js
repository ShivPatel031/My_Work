import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../DataAction/crateReducer';

export const store = configureStore({
    reducer:todoReducer 
});