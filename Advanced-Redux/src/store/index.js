import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ui-slice";
import cartSlice from "./cart-slice";

const store = configureStore({
    reducer: {
        uiReducer: uiSlice.reducer,
        cartReducer: cartSlice.reducer,
    }
})

export default store;