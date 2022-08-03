import { createSlice } from "@reduxjs/toolkit";
import { FetchCourseCertificate, FetchCoursesDiploma } from "./actions";

const initialStateCertificate = {
  certificateLoading: false,
  courseError: null,
  courseCertificate: [],
  course: {},
};

const initialStateDiploma = {
  diplomaLoading: false,
  courseError: null,
  courseDiploma: [],
  course: {},
};

const courseCertificateSlice = createSlice({
  name: "Courses",
  initialState: initialStateCertificate,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(FetchCourseCertificate.pending, (state, action) => {
        state.certificateLoading = true;
      })
      .addCase(FetchCourseCertificate.fulfilled, (state, action) => {
        state.certificateLoading = false;
        state.courseCertificate = action.payload;
      })
      .addCase(FetchCourseCertificate.rejected, (state, action) => {
        state.certificateLoading = false;
        state.courseError = action.payload.message;
      });
  },
});

const courseDiplomaSlice = createSlice({
  name: "CourseDiploma",
  initialState: initialStateDiploma,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(FetchCoursesDiploma.pending, (state, action) => {
        state.diplomaLoading = true;
      })
      .addCase(FetchCoursesDiploma.fulfilled, (state, action) => {
        state.diplomaLoading = false;
        state.courseDiploma = action.payload;
      })
      .addCase(FetchCoursesDiploma.rejected, (state, action) => {
        state.diplomaLoading = false;
        state.courseError = action.payload.message;
      });
  },
});

export const diplomaReducer = courseDiplomaSlice.reducer;
export const certificateReducer = courseCertificateSlice.reducer;
