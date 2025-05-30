import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  loggedIn: boolean;
  lastLocation: string | null;
}

const initialState: AuthState = {
  loggedIn: false,
  lastLocation: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logIn: (state) => {
      state.loggedIn = true;
    },
    logOut: (state) => {
      state.loggedIn = false;
    },
    setLastLocation: (state, action: PayloadAction<string | null>) => {
      state.lastLocation = action.payload;
    },
  },
});

export const { logIn, logOut, setLastLocation } = authSlice.actions;

export default authSlice.reducer;
