import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../slicer/CartSlice"
import priceSlice from "../slicer/PriceSlice";


const store = configureStore ({
    reducer: {
        cart : cartSlice,
        price : priceSlice
    }
});

export default store;