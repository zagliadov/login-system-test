import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  status: "",
  students: [],
};

export const getStudents = createAsyncThunk(
  "user/students",
  async (data) => {
    try {
      return await axios
        .post(`http://127.0.0.1:9001/api/students/getStudents`, data)
        .then((response) => response.data)
        .then((data) => data.message);
    } catch (error) {
      console.log(error);
    }
  }
);

export const studentsSlice = createSlice({
  name: "students",
  initialState,
  reducers: {
  },

  extraReducers: (builder) => {
    builder
      .addCase(getStudents.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getStudents.fulfilled, (state, { payload }) => {
        state.status = "resolved";
        state.students = payload;
      })
      .addCase(getStudents.rejected, () => {});
  },
});

export const {  } = studentsSlice.actions;

export default studentsSlice.reducer;
