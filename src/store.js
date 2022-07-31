import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/reducer";
import profileReducer from "./features/profile/reducers";
import { diplomaReducer, certificateReducer } from "./features/courses/reducer";
import resultsReducer from "./features/results/reducer";

const store = configureStore({
  reducer: {
    Auth: authReducer,
    Profile: profileReducer,
    Certificate: certificateReducer,
    Diploma: diplomaReducer,
    Results: resultsReducer,
  },
});

export default store;
