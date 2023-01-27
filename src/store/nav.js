import { createSlice } from "@reduxjs/toolkit";
import { LINKS } from "../constants/navigation";

const initialNavState = {
  currentLocation: LINKS.home,
};

const navSlice = createSlice({
  name: "nav",
  initialState: initialNavState,
  reducers: {
    changeLocation(state, { payload }) {
      state.currentLocation = payload;
    },
  },
});

export const navActions = navSlice.actions;

export default navSlice.reducer;
