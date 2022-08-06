import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/reducer";
import profileReducer from "./features/profile/reducers";
import { diplomaReducer, certificateReducer } from "./features/courses/reducer";
import resultsReducer from "./features/results/reducer";
import applicationReducer from "./features/myapplication/reducer";

const store = configureStore({
  reducer: {
    Auth: authReducer,
    Profile: profileReducer,
    Certificate: certificateReducer,
    Diploma: diplomaReducer,
    Results: resultsReducer,
    Application: applicationReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ["your/action/type"],
        // Ignore these field paths in all actions
        ignoredActionPaths: ["meta.arg", "payload.timestamp"],
        // Ignore these paths in the state
        ignoredPaths: ["items.dates"],
      },
    }),
});

export default store;
