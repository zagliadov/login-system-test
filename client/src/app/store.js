import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/authSlice";
import studentsSlice from "../features/counter/studentsSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    students: studentsSlice
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
