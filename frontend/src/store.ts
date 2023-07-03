// To Configure Redux store
import { configureStore } from '@reduxjs/toolkit';
import { globalSlice1Reducer, globalSlice2Reducer } from './globalSlice'

const store = configureStore({
    reducer: {
        cartCount: globalSlice1Reducer,
        cartItems: globalSlice2Reducer,
    },
});

export default store;