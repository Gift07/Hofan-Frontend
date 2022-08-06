import { createSlice } from "@reduxjs/toolkit";
import { FetchResults } from "./action";

const initialState = {
  school_name: "",
  division: "",
  point: "",
  results: {
    Mathematics: "",
    Biology: "",
    History: "",
    Civics: "",
    English: "",
    Kiswahili: "",
    Geography: "",
  },
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
        state.results.Mathematics = action.payload.subjects.CIV;
        state.results.Biology = action.payload.subjects.BIO;
        state.results.Civics = action.payload.subjects.CIV;
        state.results.History = action.payload.subjects.HIST;
        state.results.Kiswahili = action.payload.subjects.KISW;
        state.results.English = action.payload.subjects.ENGL;
        state.results.Geography = action.payload.subjects.GEO;
      })
      .addCase(FetchResults.rejected, (state, action) => {
        state.resultsError = action.payload;
      });
  },
});

export default resultsSlice.reducer;
