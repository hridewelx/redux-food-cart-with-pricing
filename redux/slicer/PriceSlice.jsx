import { createSlice } from "@reduxjs/toolkit";

const priceSlice = createSlice ({
    name: 'priceSlice',
    initialState: {price : 0},
    reducers: {
        addPrice: (state, action) => {
            const next = state.price + Number(action.payload || 0);
            state.price = Math.round(next * 100) / 100;
        },
        removePrice: (state, action) => {
            const next = state.price - Number(action.payload || 0);
            state.price = Math.round(next * 100) / 100;
        }
    }
});

export default priceSlice.reducer;
export const {addPrice, removePrice} = priceSlice.actions;