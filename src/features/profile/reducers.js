import { createSlice } from "@reduxjs/toolkit";
import { FetchProfile } from "./actions";

const initialState = {
    profileLoading:false,
    profiles:[],
    profile:{},
    profileError:null
}

const profileSlice = createSlice({
    name:"profile",
    initialState,
    reducers:{},
    extraReducers(builder){
        builder.addCase(FetchProfile.pending, (state, action)=>{
            state.profileLoading = true
        }).addCase(FetchProfile.fulfilled, (state, action)=>{
            state.profileLoading = false
            state.profile = action.payload.profile
        }).addCase(FetchProfile.rejected, (state, action)=>{
            state.profileLoading = false
            state.profileError = action.payload.error
        })
    }
})

export default profileSlice.reducer