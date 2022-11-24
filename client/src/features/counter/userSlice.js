import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getUser = createAsyncThunk(
  "user/get-user",
  async () => {
    try {
      return await axios
        .get(`http://localhost:9001/api/user/get-user`)
        .then((response) => response.data)
        .then((data) => data);
    } catch (error) {
      console.log(error);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: [],
  },
  reducers: {
  },

  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getUser.fulfilled, (state, { payload }) => {
        state.status = "resolved";
        state.user = payload;
      })
      .addCase(getUser.rejected, () => {});
  },
});

export const {  } = userSlice.actions;

export default userSlice.reducer;
