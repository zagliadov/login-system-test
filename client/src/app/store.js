import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/authSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
