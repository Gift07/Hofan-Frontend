import { createAsyncThunk } from "@reduxjs/toolkit";

export const FetchResults = createAsyncThunk(
  "Results/Fetch",
  async ({ bodyData, axiosPrivate }) => {
    try {
      const { data } = await axiosPrivate.post("necta/results/", bodyData);

      console.log(data.results);

      return data;
    } catch (error) {
      return error;
    }
  }
);
