import { createSlice } from "@reduxjs/toolkit";
import { ApplyCourseAction } from "./action";

const initialState = {
  applicationLoading: false,
  applicationMessage: "",
  applicationError: "",
};
const applyReducer = createSlice({
  name: "Apply",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(ApplyCourseAction.pending, (state, action) => {
        state.applicationLoading = true;
      })
      .addCase(ApplyCourseAction.fulfilled, (state, action) => {
        state.applicationLoading = false;
        state.applicationMessage = action.payload.message;
      })
      .addCase(ApplyCourseAction.rejected, (state, action) => {
        state.applicationLoading = false;
        state.applicationError = action.payload;
      });
  },
});

export default applyReducer.reducer;
