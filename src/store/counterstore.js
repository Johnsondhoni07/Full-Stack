import { createSlice } from "@reduxjs/toolkit";


const initialcounter = { counter: 0, showCounter: true };

const CounterSlice = createSlice({
  name: "counter",
  initialState: initialcounter,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      console.log(action.payload);
      state.counter = state.counter + action.payload;
    },
    toogle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});
export const CounterAction = CounterSlice.actions;

export default CounterSlice.reducer;