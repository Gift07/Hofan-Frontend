import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

export const FetchCourseCertificate = createAsyncThunk(
  "Courses/Fetch",
  async () => {
    try {
      const { data } = await axios.get("/courses/certificate/");

      return data;
    } catch (error) {
      return error;
    }
  }
);

export const FetchCoursesDiploma = createAsyncThunk(
  "Courses/Fetch",
  async () => {
    try {
      const { data } = await axios.get("/courses/diploma/");

      return data;
    } catch (error) {
      return error;
    }
  }
);
