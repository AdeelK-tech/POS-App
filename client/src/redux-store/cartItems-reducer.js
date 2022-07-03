import { createSlice } from "@reduxjs/toolkit";
const items = JSON.parse(localStorage.getItem("cartItems"));
console.log(items + " inside the reducer");
const cart_Slice = createSlice({
  name: "cart-Items",
  initialState: {
    items: items ? JSON.parse(localStorage.getItem("cartItems")) : [],
  },
  reducers: {
    addItem(state, action) {
      state.items.push(action.payload);
    },
  },
});
export const actions = cart_Slice.actions;
export default cart_Slice;
