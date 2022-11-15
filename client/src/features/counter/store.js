import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import studentsSlice from "./studentsSlice";
import userSlice from "./userSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    students: studentsSlice,
    user: userSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
