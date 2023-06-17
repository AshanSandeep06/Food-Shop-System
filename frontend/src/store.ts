// To Configure Redux store
import { configureStore } from '@reduxjs/toolkit';
import globalReducer from "./globalSlice";

const store = configureStore({
    reducer: {
        global: globalReducer
    },
});

export default store;