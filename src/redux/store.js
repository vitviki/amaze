import { configureStore } from "@reduxjs/toolkit";
import hamburgerSlice from "./features/hamburgerMenu/hamburgerSlice";
import userSlice from "./features/user/userSlice";

const store = configureStore({
  reducer: {
    hamburger: hamburgerSlice,
    user: userSlice,
  },
});

export default store;
