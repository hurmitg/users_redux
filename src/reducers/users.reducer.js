import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  loading: false,
  error: "",
  user: {},
};

export const fetchAllUsers = createAsyncThunk("users/fetchAll", async () => {
  const result = await axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      return res;
    });
  return result.data;
});

export const fetchSingleUser = createAsyncThunk(
  "users/fetchOne",
  async (id) => {
    const result = await axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        return res;
      });
    return result.data;
  }
);

const userReducer = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAllUsers.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    [fetchAllUsers.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchSingleUser.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchSingleUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
  },
});
export default userReducer.reducer;
