import { createSlice } from "@reduxjs/toolkit";
import { FetchResults } from "./action";

const initialState = {
    school_name:"",
    first_name:"",
    middle_name:"",
    last_name:"",
    division:"",
    point:"",
    results:[],
    resultsLoading:false,
    resultsError:null
}

const resultsSlice = createSlice({
    name:"results",
    initialState,
    reducers:{},
    extraReducers(builder){
        builder.addCase(FetchResults.pending, (state, action)=>{
            state.resultsLoading = true
        }).addCase(FetchResults.fulfilled, (state, action)=>{
            state.resultsLoading = false
        }).addCase(FetchResults.rejected, (state, action)=>{
            state.resultsError = action.payload
        })
    }
})

export default resultsSlice.reducer