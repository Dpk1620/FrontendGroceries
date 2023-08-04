import {configureStore } from "@reduxjs/toolkit"
import userSliceReducer from "./userSlice";
import productSliceReducer from "./productSlice";
import languageSliceReducer from "./languageSlice";




// Set central Store for Your Application
export const store = configureStore({
    reducer:{
        user:userSliceReducer,
        product:productSliceReducer,
        languageSetting:languageSliceReducer

    }
})