import { createAsyncThunk } from "@reduxjs/toolkit";

export const ApplyCourseAction = createAsyncThunk(
  "Apply/Course",
  async ({ formData, axiosPrivate }) => {
    try {
      const { data } = await axiosPrivate.post(
        "/applications/create/",
        formData
      );
      console.log(data);
      return data;
    } catch (error) {
      return error;
    }
  }
);
