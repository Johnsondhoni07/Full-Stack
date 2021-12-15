import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
    total:0,
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
    //   console.log(state.items);
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },

    removeItemFromCart(state, action) {
      // const id = action.payload;
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity--;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== newItem.id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice=existingItem.totalPrice-newItem.price
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;

// import { createSlice } from "@reduxjs/toolkit";


// const cartSlice = createSlice({
//   name: "cart",
//   initialstate: {
//     item: [],
//     totalquantity: 0,
//   },
//   reducers: {
//     addItemToCard(state, action) {
//       const newItem = action.payload;
//       const existing = state.item.find((item) => item.id === newItem.id);
//       state.totalquantity++;
//       if (!existing) {
//         state.item.push({
//           id: newItem.id,
//           price: newItem.price,
//           quantity: 1,
//           totalPrice: newItem.price,
//           name: newItem.title,
//         });
//       } else {
//         existing.quantity++;
//         existing.totalprice = existing.totalPrice + newItem.price;
//       }
//     },
//   removeItemFromCart(state, action) {
//     const id = action.payload;
//     const existing = state.item.find(item => item.id === id);
//     state.totalquantity--;
//     if (existing.quantity === 1) {
//       state.item = state.item.filter(item => item.id !== id);
//     } else {
//       existing.quantity--;
//     }
//   },
// }});

// export const cartActions = cartSlice.actions;

// export default cartSlice;
