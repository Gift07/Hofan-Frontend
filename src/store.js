import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/reducer"

const store = configureStore({
    reducer:{
        Auth:authReducer,
    }
})

export default store