import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { loggedIn: false, lastLocation: null },
  reducers: {
    logIn: (state) => {
      state.loggedIn = true;
    },
    logOut: (state) => {
      state.loggedIn = false;
    },
    setLastLocation: (state, action) => {
      state.lastLocation = action.payload;
    },
  },
});

export const { logIn, logOut, setLastLocation } = authSlice.actions;

export default authSlice.reducer;
