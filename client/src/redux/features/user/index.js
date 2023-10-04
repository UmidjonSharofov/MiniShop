import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

import axios from "axios";

export const getUser = createAsyncThunk(
  "getUser",
  async (arg, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/user/me");
      return data;
    } catch (eror) {
      rejectWithValue(eror.response.data);
    }
  }
);
const initialState = {
  data: [],
  message: "",
  loading: false,
  isSuccess: false,
};
const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addtodo: (state, { payload }) => {
      state.data.user = { ...state.data.user, title: "a" };
      },
  },
  extraReducers: {
    [getUser.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [getUser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
      state.isSuccess = true;
    },
    [getUser.rejected]: (state, { payload }) => {
      state.message = payload;
      state.isSuccess = false;
      state.loading = false;
    },
  },
});
export const { addtodo, deleteItem, edit } = UserSlice.actions;
export default UserSlice;
