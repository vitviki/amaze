import { configureStore } from "@reduxjs/toolkit";
import hamburgerSlice from "./features/hamburgerMenu/hamburgerSlice";

const store = configureStore({
  reducer: {
    hamburger: hamburgerSlice,
  },
});

export default store;
