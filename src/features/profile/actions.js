import { createAsyncThunk } from "@reduxjs/toolkit";

export const FetchProfile = createAsyncThunk(
  "User/FetchProfile",
  async ({ axiosPrivate }) => {
    try {
      const { data } = await axiosPrivate.get("profile/me/");

      return data;
    } catch (error) {
      return error;
    }
  }
);

export const UpdateProfile = createAsyncThunk(
  "User,UpdateProfile",
  async ({ axiosPrivate, formData, username }) => {
    try {
      const { data } = await axiosPrivate.patch(
        `profile/update/${username}/`,
        formData
      );

      return data;
    } catch (error) {
      return error;
    }
  }
);
