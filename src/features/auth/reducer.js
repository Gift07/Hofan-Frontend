import { createSlice } from "@reduxjs/toolkit";
import { LoadUser, SignInAction, SignUpAction } from "./action";

const initialState = {
  authLoading: false,
  authError: null,
  access: "",
  refresh: "",
  firstName: "",
  middleName: "",
  surName: "",
  id: "",
  email: "",
  phone: "",
  gender: "",
  admin: false,
  is_staff: false,
};

const authReducer = createSlice({
  name: "Auth",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(SignInAction.pending, (state, action) => {
        state.authLoading = true;
      })
      .addCase(SignInAction.fulfilled, (state, action) => {
        state.authLoading = false;
        state.access = action.payload.access;
        state.refresh = action.payload.refresh;
      })
      .addCase(SignInAction.rejected, (state, action) => {
        state.authLoading = false;
        state.authError = action.payload.error;
      })
      .addCase(LoadUser.pending, (state, action) => {
        state.authLoading = true;
      })
      .addCase(LoadUser.fulfilled, (state, action) => {
        state.authLoading = false;
        state.firstName = action.payload.first_name;
        state.middleName = action.payload.middle_name;
        state.surName = action.payload.sur_name;
        state.email = action.payload.email;
        state.gender = action.payload.gender;
        state.phone = action.payload.phone_number;
        state.id = action.payload.id;
        state.is_staff = action.payload.is_staff;
        state.admin = action.payload.admin;
        state.access = localStorage.getItem("access");
        state.refresh = localStorage.getItem("refresh");
      })
      .addCase(LoadUser.rejected, (state, action) => {
        state.authLoading = false;
        state.authError = action.payload.error;
      })
      .addCase(SignUpAction.pending, (state, action) => {
        state.authLoading = true;
      })
      .addCase(SignUpAction.fulfilled, (state, action) => {
        state.authLoading = false;
        state.firstName = action.payload.first_name;
        state.middleName = action.payload.middle_name;
        state.surName = action.payload.middle_name;
      })
      .addCase(SignUpAction.rejected, (state, action) => {
        state.authLoading = false;
        state.authError = action.payload;
      });
  },
});

export default authReducer.reducer;
