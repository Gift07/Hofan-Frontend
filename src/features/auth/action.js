import {createAsyncThunk} from "@reduxjs/toolkit"
import axios from "../../axios"

export const SignInAction = createAsyncThunk("Auth/SignInAction", async(body)=>{
    console.log(body)
    try {
        const {data} = await axios.post("/auth/jwt/create/", body)

        localStorage.setItem("access", data.access)
        localStorage.setItem("refresh", data.refresh)
        return data
    } catch (error) {
        return error
    }
})

export const LoadUser=createAsyncThunk("Auth/LoadUser",async({axiosPrivate})=>{
    try {
        const {data}=await axiosPrivate.get("/auth/users/me/")

        return data
    } catch (error) {
        return error
    }
})