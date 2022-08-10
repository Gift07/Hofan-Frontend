import { createSlice } from "@reduxjs/toolkit";
import {
  AppliedStudentsAction,
  ApplyCourseAction,
  ApprovedStudentsAction,
} from "./action";

const initialState = {
  applicationLoading: false,
  applicationMessage: "",
  applicationError: "",
  applied: [],
  approved: [],
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
      })
      .addCase(AppliedStudentsAction.pending, (state, action) => {
        state.applicationLoading = true;
      })
      .addCase(AppliedStudentsAction.fulfilled, (state, action) => {
        state.applicationLoading = false;
        state.applied = action.payload;
      })
      .addCase(AppliedStudentsAction.rejected, (state, action) => {
        state.applicationLoading = false;
        state.applicationError = action.payload.message;
      });
  },
});

export default applyReducer.reducer;
