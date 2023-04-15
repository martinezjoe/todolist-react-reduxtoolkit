import { createSlice } from "@reduxjs/toolkit";

const initialValues = {
  setVisibility: "SHOW_ALL",
};

export const filterSlice = createSlice({
  name: "todos",
  initialState: initialValues,
  reducers: {
    showAll: (state) => {
      state.setVisibility = "SHOW_ALL";
    },
    showCompleted: (state) => {
      state.setVisibility = "SHOW_COMPLETED";
    },
    showPending: (state) => {
      state.setVisibility = "SHOW_PENDING";
    },
  },
});

// Action creators are generated for each case reducer function
export const { showAll, showCompleted, showPending } = filterSlice.actions;

export default filterSlice.reducer;
