import { createAsyncThunk } from "@reduxjs/toolkit";

export const FetchProfile = createAsyncThunk("User/FetchProfile", async({axiosPrivate})=>{
    try {
        const {data} = await axiosPrivate.get("profile/me/")

        return data
    } catch (error) {
        return error
    }
})