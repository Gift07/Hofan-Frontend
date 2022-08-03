import { createSlice } from "@reduxjs/toolkit";
import { FetchResults } from "./action";

const initialState = {
  school_name: "",
  division: "",
  point: "",
  results: [],
  resultsLoading: false,
  resultsError: null,
};

const resultsSlice = createSlice({
  name: "results",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(FetchResults.pending, (state, action) => {
        state.resultsLoading = true;
      })
      .addCase(FetchResults.fulfilled, (state, action) => {
        state.resultsLoading = false;
        state.school_name = action.payload.school_name;
        state.division = action.payload.division;
        state.point = action.payload.points;
      })
      .addCase(FetchResults.rejected, (state, action) => {
        state.resultsError = action.payload;
      });
  },
});

export default resultsSlice.reducer;
