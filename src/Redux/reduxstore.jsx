import { configureStore } from "@reduxjs/toolkit";
import userdata from "./storeSlice"

export default configureStore({
    reducer:{
        user:userdata

    }
})