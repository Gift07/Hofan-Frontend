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

export const AppliedStudentsAction = createAsyncThunk(
  "Apply/AppliedStudents",
  async ({ axiosPrivate }) => {
    try {
      const response = axiosPrivate.get("applications/applied");
      console.log(response);
      return;
    } catch (error) {
      return error;
    }
  }
);

export const ApprovedStudentsAction = createAsyncThunk(
  "Apply/AppliedStudents",
  async ({ axiosPrivate }) => {
    try {
      const { data } = axiosPrivate.get("applications/approved");
      return data;
    } catch (error) {
      return error;
    }
  }
);
