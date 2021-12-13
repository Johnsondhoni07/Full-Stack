// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import Counterreducer from "./counterstore";
import Authreducer from "./authstore";

const store = configureStore({
  reducer: {
    counter: Counterreducer,
    auth: Authreducer,
  },
});

export default store;

// const CounterReducer = (state = initial, action) => {
//   if (action.type === "increment") {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter
//     };
//   }
//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter
//     };
//   }
//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter
//     };
//   }
//   if (action.type === "toogle") {
//     //   console.log('running');
//     return {
//       showCounter: !state.showCounter,
//       counter: state.counter
//     };
//   }
//   return state;
// };
