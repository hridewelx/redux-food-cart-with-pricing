import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'CartSlice',
    initialState: {count : 0},
    reducers: {
        addItem: (state) => {state.count++},
        removeItem: (state) => {state.count--}
    }
});

export const {addItem, removeItem} = cartSlice.actions;
export default cartSlice.reducer;