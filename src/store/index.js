import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todoslice";

const store = configureStore({
    reducer:{todo:todoSlice.reducer},
});
export default store;