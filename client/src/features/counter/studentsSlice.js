import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getStudents = createAsyncThunk(
  "students/all-students",
  async () => {
    try {
      return await axios
        .get(`http://localhost:9001/api/students/get-students`)
        .then((response) => response.data)
        .then((data) => data);
    } catch (error) {
      console.log(error);
    }
  }
);

export const testQuery = createAsyncThunk("students/testQuery", async () => {
  try {
    return await axios
      .get(`http://localhost:9001/api/students/test-query`)
      .then((response) => response.data)
      .then((data) => data);
  } catch (error) {
    console.log(error);
  }
});

export const studentsSlice = createSlice({
  name: "students",
  initialState: {
    status: "",
    students: [],
  },
  reducers: {
    getStatus(state) {
      return state.status;
    },
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
    builder
      .addCase(testQuery.pending, (state) => {
        state.status = "loading";
      })
      .addCase(testQuery.fulfilled, (state, { payload }) => {
        state.status = "resolved";
        state.students = payload;
      })
      .addCase(testQuery.rejected, () => {});
  },
});

export const { getStatus } = studentsSlice.actions;

export default studentsSlice.reducer;
