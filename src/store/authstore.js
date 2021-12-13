import { createSlice } from "@reduxjs/toolkit";

const initialauth = { isauthenticated: false, };
const AuthSlice = createSlice({
  name: "Auth",
  initialState: initialauth,
  reducers: {
    login(state) {
      state.isauthenticated = true;
    },
    logout(state) {
      state.isauthenticated = false;
    },
  },
});
export const AuthAction = AuthSlice.actions;
export default AuthSlice.reducer;