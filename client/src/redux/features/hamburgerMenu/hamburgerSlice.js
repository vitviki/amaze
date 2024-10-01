import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sideBarOpen: false,
};

const hamburgerSlice = createSlice({
  name: "hamburgerSlice",
  initialState,
  reducers: {
    openSideBar: (state) => {
      state.sideBarOpen = true;
    },
    closeSideBar: (state) => {
      state.sideBarOpen = false;
    },
  },
});

export const { openSideBar, closeSideBar } = hamburgerSlice.actions;
export default hamburgerSlice.reducer;
