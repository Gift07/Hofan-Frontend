import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

export const SignInAction = createAsyncThunk(
  "Auth/SignInAction",
  async (body) => {
    console.log(body);
    try {
      const { data } = await axios.post("/auth/jwt/create/", body);

      localStorage.setItem("access", data.access);
      localStorage.setItem("refresh", data.refresh);
      return data;
    } catch (error) {
      return error;
    }
  }
);

export const LoadUser = createAsyncThunk(
  "Auth/LoadUser",
  async ({ axiosPrivate }) => {
    try {
      const { data } = await axiosPrivate.get("/auth/users/me/");

      return data;
    } catch (error) {
      return error;
    }
  }
);

export const SignUpAction = createAsyncThunk(
  "Auth/SignUp",
  async (formData) => {
    try {
      const { data } = await axios.post("/auth/users/", formData);

      localStorage.setItem("sign-up", true);
      return data;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
);

export const verifyUserAction = createAsyncThunk(
  "Auth/VerifyUser",
  async (body) => {
    try {
      const { status } = await axios.post("auth/users/activation/", body);

      console.log(status);

      if (status === 204) {
        localStorage.clear();
        localStorage.setItem("redirect", true);
      }
    } catch (error) {
      return error;
    }
  }
);

export const signOutAction = () => {
  try {
    localStorage.clear();
  } catch (error) {
    return error;
  }
};
