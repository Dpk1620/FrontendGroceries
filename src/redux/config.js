import {configureStore } from "@reduxjs/toolkit"
import userSliceReducer from "./userSlice";
import productSliceReducer from "./productSlice";


// Set central Store for Your Application
export const store = configureStore({
    reducer:{
        user:userSliceReducer,
        product:productSliceReducer,

    }
})