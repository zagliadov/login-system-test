import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { pocketAPI } from "./pocketAPI";
import authSlice from "./authSlice";
import studentsSlice from "./studentsSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    students: studentsSlice,
    [pocketAPI.reducerPath]: pocketAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(pocketAPI.middleware),
});
setupListeners(store.dispatch);
