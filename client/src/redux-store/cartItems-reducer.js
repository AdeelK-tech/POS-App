import { createSlice } from "@reduxjs/toolkit";
const cart_Slice = createSlice({
  name: "cart-Items",
  initialState: {
    items: [],
  },
  reducers: {
    addItem(state, action) {
      state.items.push(action.item);
    },
  },
});
export const actions = cart_Slice.actions;
export default cart_Slice;
