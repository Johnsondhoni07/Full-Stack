import { configureStore } from "@reduxjs/toolkit";

import uislice from "./ui-slice";
import cartSlice from "./cart-slice";
// console.log(uislice);
// console.log(cartSlice);
const store = configureStore({
  reducer: {
    ui: uislice.reducer,
    cart: cartSlice.reducer,
  },
});

export default store;
