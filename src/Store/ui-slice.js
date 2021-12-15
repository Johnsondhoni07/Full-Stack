import { createSlice } from "@reduxjs/toolkit";

const uislice = createSlice({
    name:'ui',
    initialState: {cartIsVisible:false},
    reducers:{
        toggle(state) {
            state.cartIsVisible = !state.cartIsVisible
        }
    }
})

export const uiaction=uislice.actions;

export default uislice;