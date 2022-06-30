import { configureStore } from "@reduxjs/toolkit";
import cart_Slice from "./cartItems-reducer";
const store = configureStore({
  reducer: {
    cart: cart_Slice.reducer,
  },
});
export default store;
