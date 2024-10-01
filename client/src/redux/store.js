import { configureStore } from "@reduxjs/toolkit";
import hamburgerSlice from "./features/hamburgerMenu/hamburgerSlice";
import userSlice from "./features/user/userSlice";
import { amazonCore } from "./api/amazonCore";

const store = configureStore({
  reducer: {
    hamburger: hamburgerSlice,
    user: userSlice,
    [amazonCore.reducerPath]: amazonCore.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(amazonCore.middleware),
});

export default store;
