import { createAsyncThunk } from "@reduxjs/toolkit";

export const FetchResults = createAsyncThunk("Results/Fetch", async({body,axiosPrivate})=>{
    try {
        const {data} = await axiosPrivate.post("necta/results",body)
        console.log(data)
        return data
    } catch (error) {
        return error 
    }
})