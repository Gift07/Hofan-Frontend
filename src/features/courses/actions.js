import {createAsyncThunk} from "@reduxjs/toolkit"

export const FetchCourseCertificate = createAsyncThunk("Courses/Fetch", async({axiosPrivate})=>{
    try {
        const {data}  = await axiosPrivate.get("/courses/certificate/")

        return data
    } catch (error) {
        return error
    }
})

export const FetchCoursesDiploma = createAsyncThunk("Courses/Fetch", async({axiosPrivate})=>{
    try {
        const {data}  = await axiosPrivate.get("/courses/diploma/")

        return data
    } catch (error) {
        return error
    }
})