import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: null,
  isFetching: false,
  isError: false,
  message: null,
};

const itemSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    Start: (state) => ({ ...state, isFetching: true }),
    Success: (state, action) => ({
      ...state,
      isFetching: false,
      isLoggedin: true,
      items: action.payload,
      message: null,
    }),
    Failure: (state, action) => ({
      ...state,
      isFetching: false,
      isError: true,
      message: action.payload,
    }),
  },
});

export const { Start, Success, Failure } = itemSlice.actions;
export default itemSlice.reducer;
