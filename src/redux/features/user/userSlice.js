import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isLoading: true,
  wishlist: [],
  cart: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.user = action.payload;
    },
    logoutUser: (state) => {
      state.user = null;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setWishlist: (state, action) => {
      state.wishlist = action.payload;
    },
    setCart: (state, action) => {
      state.cart = action.payload;
    },
  },
});

export const { loginUser, logoutUser, setLoading, setWishlist, setCart } =
  userSlice.actions;

export default userSlice.reducer;
