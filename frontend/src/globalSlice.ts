import { createSlice } from "@reduxjs/toolkit";

const globalSlice = createSlice({
    name: "global",
    initialState: "0",
    reducers: {
        setCartCount: (state, action) => {
            return action.payload;
        },
    }
});

export const { setCartCount }  = globalSlice.actions;
export default globalSlice.reducer;